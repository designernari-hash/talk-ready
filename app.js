const DAY = 24 * 60 * 60 * 1000;
const INTERVALS = [0, 1, 3, 7, 14, 30];
const NEW_PER_SESSION = 10;

const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
};

// Bump when phrase texts change so old progress doesn't attach to different sentences.
const CONTENT_VERSION = 2;
if (store.get("tr-content", 1) !== CONTENT_VERSION) {
  store.set("tr-progress", {});
  store.set("tr-content", CONTENT_VERSION);
}

const state = {
  progress: store.get("tr-progress", {}),
  stars: new Set(store.get("tr-stars", [])),
  qaDone: new Set(store.get("tr-qa-done", [])),
  moduleId: store.get("tr-module", MODULES[0].id),
  categoryId: null,
  session: null,
  qaIndex: null
};

const ALL = MODULES.flatMap(m =>
  m.categories.flatMap(c =>
    c.phrases.map(([en, ko], i) => ({ id: `${c.id}-${i}`, en, ko, cat: c.title, moduleId: m.id }))
  )
);

const $ = sel => document.querySelector(sel);
const esc = s => s.replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

function saveProgress() { store.set("tr-progress", state.progress); }

/* ---------- speech ---------- */

let voice = null;
function pickVoice() {
  const voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith("en"));
  voice = ["Samantha", "Google US English", "Ava", "Allison"]
    .map(name => voices.find(v => v.name.includes(name)))
    .find(Boolean) || voices.find(v => v.lang === "en-US") || voices[0] || null;
}
if ("speechSynthesis" in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}

let currentUtterance = null;
function speak(text, rate = 0.9) {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text.replace(/\.\.\./g, ", blank,").replace(/\(=\s*/g, ", meaning, ").replace(/\)/g, ""));
  u.lang = "en-US";
  u.rate = rate;
  if (voice) u.voice = voice;
  // Chrome keeps a weak ref to the utterance; without this it can be GC'd mid-sentence.
  currentUtterance = u;
  // Chrome drops an utterance queued right after cancel(), so give cancel a moment to settle.
  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel();
    setTimeout(() => speechSynthesis.speak(u), 120);
  } else {
    speechSynthesis.speak(u);
  }
}

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let activeRec = null;

function listen({ continuous = false, onText, onEnd }) {
  if (!Recognition) {
    alert("이 브라우저는 음성 인식을 지원하지 않아요. Chrome이나 Safari에서 열어 주세요.");
    return null;
  }
  if (activeRec) activeRec.stop();
  const rec = new Recognition();
  rec.lang = "en-US";
  rec.interimResults = true;
  rec.continuous = continuous;
  let finalText = "";
  rec.onresult = e => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) finalText += t + " ";
      else interim += t;
    }
    onText((finalText + interim).trim());
  };
  rec.onend = () => {
    activeRec = null;
    onEnd(finalText.trim());
  };
  rec.onerror = e => {
    if (e.error === "not-allowed") alert("마이크 권한을 허용해 주세요.");
  };
  rec.start();
  activeRec = rec;
  return rec;
}

const words = s => s.toLowerCase().replace(/\.\.\./g, " ").replace(/[^a-z0-9' ]/g, " ").split(/\s+/).filter(Boolean);

function matchScore(target, spoken) {
  const t = words(target);
  const pool = words(spoken);
  let hit = 0;
  for (const w of t) {
    const i = pool.indexOf(w);
    if (i !== -1) { hit++; pool.splice(i, 1); }
  }
  return t.length ? Math.round((hit / t.length) * 100) : 0;
}

function scoreLabel(score) {
  if (score >= 90) return "완벽해요";
  if (score >= 70) return "거의 다 맞았어요";
  return "한 번 더 들어 보고 따라 해 봐요";
}

function practiceSpeak(btn, target, resultEl) {
  if (activeRec) { activeRec.stop(); return; }
  const rec = listen({
    onText: t => { resultEl.textContent = t; },
    onEnd: t => {
      btn.classList.remove("rec");
      if (!t) { resultEl.textContent = "소리가 들리지 않았어요. 다시 눌러 말해 보세요."; return; }
      const score = matchScore(target, t);
      resultEl.innerHTML = `<b>${score}%</b> · ${scoreLabel(score)}<br><span class="muted">"${esc(t)}"</span>`;
    }
  });
  if (!rec) return;
  btn.classList.add("rec");
  resultEl.hidden = false;
  resultEl.textContent = "듣고 있어요…";
}

/* ---------- study (flashcards) ---------- */

function poolFor(moduleId) {
  if (moduleId === "star") return ALL.filter(p => state.stars.has(p.id));
  return ALL.filter(p => p.moduleId === moduleId);
}

function counts(pool) {
  const now = Date.now();
  let due = 0, fresh = 0, learned = 0;
  for (const p of pool) {
    const pr = state.progress[p.id];
    if (!pr) fresh++;
    else {
      if (pr.due <= now) due++;
      if (pr.box >= 3) learned++;
    }
  }
  return { due, fresh, learned };
}

function moduleChips(includeStar) {
  const items = MODULES.map(m => [m.id, m.title]);
  if (includeStar) items.push(["star", "★ 즐겨찾기"]);
  return `<div class="chips">${items.map(([id, title]) =>
    `<button class="chip ${state.moduleId === id ? "active" : ""}" data-module="${id}">${title}</button>`
  ).join("")}</div>`;
}

function bindModuleChips(root, rerender) {
  root.querySelectorAll("[data-module]").forEach(b => b.onclick = () => {
    state.moduleId = b.dataset.module;
    state.categoryId = null;
    store.set("tr-module", state.moduleId);
    rerender();
  });
}

function renderStudy() {
  const root = $("#view-study");
  if (state.session) return renderFlashcard(root);

  const pool = poolFor(state.moduleId);
  const c = counts(pool);
  const mod = MODULES.find(m => m.id === state.moduleId);
  const todayCount = c.due + Math.min(c.fresh, NEW_PER_SESSION);

  root.innerHTML = `
    ${moduleChips(true)}
    ${mod ? `<p class="muted small">${esc(mod.subtitle)}</p>` : ""}
    <div class="stats">
      <div class="stat"><b>${c.due}</b><span>복습할 표현</span></div>
      <div class="stat"><b>${c.fresh}</b><span>새 표현</span></div>
      <div class="stat"><b>${c.learned}/${pool.length}</b><span>외운 표현</span></div>
    </div>
    <div class="card">
      <h3>오늘의 학습</h3>
      <p class="muted small">한국어 뜻을 보고 영어로 먼저 말해 본 다음, 정답을 확인하세요. 기억이 잘 날수록 다음 복습 간격이 길어져요.</p>
      ${todayCount
        ? `<button class="btn primary block" id="start">${todayCount}개 학습 시작</button>`
        : pool.length
          ? `<p class="small">오늘 할 학습을 다 끝냈어요. 🎉</p><button class="btn block" id="cram">전체 다시 훑어보기</button>`
          : `<p class="small muted">표현집에서 ☆를 눌러 즐겨찾기를 추가하세요.</p>`}
    </div>
  `;

  bindModuleChips(root, renderStudy);
  const start = root.querySelector("#start");
  if (start) start.onclick = () => startSession(pool, false);
  const cram = root.querySelector("#cram");
  if (cram) cram.onclick = () => startSession(pool, true);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startSession(pool, all) {
  const now = Date.now();
  let queue;
  if (all) queue = shuffle([...pool]);
  else {
    const due = pool.filter(p => state.progress[p.id] && state.progress[p.id].due <= now);
    const fresh = pool.filter(p => !state.progress[p.id]).slice(0, NEW_PER_SESSION);
    queue = [...shuffle(due), ...fresh];
  }
  state.session = { queue, total: queue.length, done: 0, revealed: false, history: [] };
  renderStudy();
}

function rate(card, grade) {
  const pr = state.progress[card.id] || { box: 0, due: 0 };
  const s = state.session;
  s.queue.shift();
  if (grade === "again") {
    pr.box = 0;
    pr.due = Date.now();
    s.queue.splice(Math.min(3, s.queue.length), 0, card);
  } else {
    pr.box = grade === "easy" ? Math.min(pr.box + 1, INTERVALS.length - 1) : Math.max(pr.box, 1);
    pr.due = Date.now() + INTERVALS[pr.box] * DAY;
    s.done++;
    s.history.push(card);
  }
  state.progress[card.id] = pr;
  saveProgress();
  s.revealed = false;
  renderStudy();
}

function skip() {
  const s = state.session;
  s.history.push(s.queue.shift());
  s.done++;
  s.revealed = false;
  renderStudy();
}

function back() {
  const s = state.session;
  if (!s.history.length) return;
  s.queue.unshift(s.history.pop());
  s.done--;
  s.revealed = true;
  renderStudy();
}

function renderFlashcard(root) {
  const s = state.session;
  const card = s.queue[0];

  if (!card) {
    state.session = null;
    root.innerHTML = `
      <div class="card empty">
        <h3>수고했어요!</h3>
        <p class="muted">${s.total}개 표현을 학습했어요.</p>
        <button class="btn primary" id="home">처음으로</button>
      </div>`;
    root.querySelector("#home").onclick = renderStudy;
    return;
  }

  root.innerHTML = `
    <button class="back" id="quit">← 그만하기</button>
    <p class="muted small">${s.done} / ${s.total}</p>
    <div class="card flash">
      <div class="cat">${esc(card.cat)}</div>
      <div class="ko">${esc(card.ko)}</div>
      ${s.revealed ? `
        <div class="en">${esc(card.en)}</div>
        <div class="btn-row" style="justify-content:center">
          <button class="mini" id="say" aria-label="듣기">🔊</button>
          <button class="mini" id="mic" aria-label="따라 말하기">🎤</button>
        </div>
        <div class="result" id="res" hidden></div>
      ` : `<p class="muted small">영어로 소리 내어 말해 보세요</p>`}
    </div>
    ${s.revealed ? `
      <div class="btn-row">
        <button class="btn again" data-grade="again">다시</button>
        <button class="btn hard" data-grade="hard">애매해요</button>
        <button class="btn easy" data-grade="easy">알아요</button>
      </div>
    ` : `<button class="btn primary block" id="reveal">정답 보기</button>`}
    <div class="btn-row" style="margin-top:8px">
      <button class="btn" id="prev" ${s.history.length ? "" : "disabled"}>← 이전</button>
      <button class="btn" id="next">다음 →</button>
    </div>
  `;

  root.querySelector("#quit").onclick = () => { state.session = null; renderStudy(); };
  root.querySelector("#prev").onclick = back;
  root.querySelector("#next").onclick = skip;
  if (s.revealed) {
    speak(card.en);
    root.querySelector("#say").onclick = () => speak(card.en);
    root.querySelector("#mic").onclick = e => practiceSpeak(e.currentTarget, card.en, root.querySelector("#res"));
    root.querySelectorAll("[data-grade]").forEach(b => b.onclick = () => rate(card, b.dataset.grade));
  } else {
    root.querySelector("#reveal").onclick = () => { s.revealed = true; renderStudy(); };
  }
}

/* ---------- phrase book ---------- */

function renderPhrases() {
  const root = $("#view-phrases");
  if (state.moduleId === "star") state.moduleId = MODULES[0].id;
  const mod = MODULES.find(m => m.id === state.moduleId);
  const cats = mod.categories;
  const cat = cats.find(c => c.id === state.categoryId) || cats[0];

  root.innerHTML = `
    ${moduleChips(false)}
    <div class="chips">${cats.map(c =>
      `<button class="chip ${c.id === cat.id ? "active" : ""}" data-cat="${c.id}">${esc(c.title)}</button>`
    ).join("")}</div>
    <div class="card">
      <h3>${esc(cat.title)}</h3>
      <p class="muted small">${esc(cat.desc)}</p>
      ${cat.phrases.map(([en, ko], i) => {
        const id = `${cat.id}-${i}`;
        return `
          <div class="phrase" data-id="${id}">
            <div class="body">
              <div class="en">${esc(en)}</div>
              <div class="ko">${esc(ko)}</div>
              <div class="result" hidden></div>
            </div>
            <button class="mini" data-act="say" aria-label="듣기">🔊</button>
            <button class="mini" data-act="mic" aria-label="따라 말하기">🎤</button>
            <button class="mini ${state.stars.has(id) ? "on" : ""}" data-act="star" aria-label="즐겨찾기">${state.stars.has(id) ? "★" : "☆"}</button>
          </div>`;
      }).join("")}
    </div>
  `;

  bindModuleChips(root, renderPhrases);
  root.querySelectorAll("[data-cat]").forEach(b => b.onclick = () => {
    state.categoryId = b.dataset.cat;
    renderPhrases();
  });
  root.querySelectorAll(".phrase").forEach(row => {
    const id = row.dataset.id;
    const en = row.querySelector(".en").textContent;
    row.querySelector('[data-act="say"]').onclick = () => speak(en);
    row.querySelector('[data-act="mic"]').onclick = e => practiceSpeak(e.currentTarget, en, row.querySelector(".result"));
    row.querySelector('[data-act="star"]').onclick = e => {
      const b = e.currentTarget;
      if (state.stars.has(id)) state.stars.delete(id); else state.stars.add(id);
      store.set("tr-stars", [...state.stars]);
      b.classList.toggle("on", state.stars.has(id));
      b.textContent = state.stars.has(id) ? "★" : "☆";
    };
  });
}

/* ---------- instructor Q&A ---------- */

function renderQA() {
  const root = $("#view-qa");
  const prompts = MODULES[0].prompts;

  if (state.qaIndex === null) {
    root.innerHTML = `
      <p class="muted small">Week 1 · 강사가 할 만한 질문이에요. 질문을 듣고 먼저 내 답을 말해 본 다음 모범 답변과 비교하세요.</p>
      ${prompts.map((p, i) => `
        <button class="q-item" data-i="${i}">
          ${state.qaDone.has(i) ? `<span class="done">✓ 연습함</span>` : ""}
          <span class="num">Q${i + 1}</span>${esc(p.q)}
          <div class="muted small">${esc(p.ko)}</div>
        </button>`).join("")}
    `;
    root.querySelectorAll("[data-i]").forEach(b => b.onclick = () => {
      state.qaIndex = Number(b.dataset.i);
      renderQA();
      window.scrollTo(0, 0);
    });
    return;
  }

  const i = state.qaIndex;
  const p = prompts[i];
  root.innerHTML = `
    <button class="back" id="back">← 질문 목록</button>
    <div class="card">
      <p class="muted small">Q${i + 1} / ${prompts.length}</p>
      <div class="question">${esc(p.q)}</div>
      <details class="small" style="margin-top:8px"><summary class="muted">한국어 뜻</summary>${esc(p.ko)}</details>
      <div class="btn-row" style="margin-top:12px">
        <button class="btn" id="q-say">🔊 질문 듣기</button>
        <button class="btn" id="q-slow">🐢 천천히</button>
      </div>
    </div>

    <div class="card">
      <h3>이렇게 시작해 보세요</h3>
      ${p.starters.map(s => `<button class="starter">${esc(s)}</button>`).join("")}
    </div>

    <div class="card">
      <h3>내 답변 말하기</h3>
      <p class="muted small">버튼을 누르고 30초에서 1분 정도 말해 보세요. 다시 누르면 멈춰요.</p>
      <div class="transcript" id="transcript"><span class="muted">여기에 내가 말한 내용이 표시돼요</span></div>
      <p class="small muted" id="rec-meta"></p>
      <button class="btn primary block" id="rec">🎤 답변 시작</button>
    </div>

    <div class="card">
      <h3>모범 답변</h3>
      <div id="answer" hidden>
        <div class="answer-en">${esc(p.answer)}</div>
        <div class="answer-ko">${esc(p.answerKo)}</div>
        <div class="btn-row" style="margin-top:12px">
          <button class="btn" id="a-say">🔊 듣기</button>
          <button class="btn" id="a-slow">🐢 천천히</button>
          <button class="btn" id="a-shadow">🎤 따라 말하기</button>
        </div>
        <div class="result" id="a-res" hidden></div>
      </div>
      <button class="btn block" id="show-answer">모범 답변 보기</button>
    </div>

    <div class="btn-row">
      <button class="btn" id="prev" ${i === 0 ? "disabled" : ""}>← 이전</button>
      <button class="btn" id="next" ${i === prompts.length - 1 ? "disabled" : ""}>다음 →</button>
    </div>
  `;

  const go = n => { state.qaIndex = n; renderQA(); window.scrollTo(0, 0); };
  root.querySelector("#back").onclick = () => go(null);
  root.querySelector("#prev").onclick = () => go(i - 1);
  root.querySelector("#next").onclick = () => go(i + 1);
  root.querySelector("#q-say").onclick = () => speak(p.q);
  root.querySelector("#q-slow").onclick = () => speak(p.q, 0.7);
  root.querySelectorAll(".starter").forEach(b => b.onclick = () => speak(b.textContent));

  const markDone = () => {
    state.qaDone.add(i);
    store.set("tr-qa-done", [...state.qaDone]);
  };

  const recBtn = root.querySelector("#rec");
  const transcript = root.querySelector("#transcript");
  const meta = root.querySelector("#rec-meta");
  let startedAt = 0, timer = null;
  recBtn.onclick = () => {
    if (activeRec) { activeRec.stop(); return; }
    const rec = listen({
      continuous: true,
      onText: t => { transcript.textContent = t; },
      onEnd: t => {
        clearInterval(timer);
        recBtn.textContent = "🎤 다시 답변하기";
        const sec = Math.round((Date.now() - startedAt) / 1000);
        if (!t) { meta.textContent = "소리가 들리지 않았어요."; return; }
        const n = words(t).length;
        meta.textContent = `${sec}초 · ${n}단어 · 분당 ${sec ? Math.round(n / sec * 60) : 0}단어`;
        markDone();
      }
    });
    if (!rec) return;
    startedAt = Date.now();
    transcript.textContent = "";
    recBtn.textContent = "■ 멈추기";
    timer = setInterval(() => { meta.textContent = `${Math.round((Date.now() - startedAt) / 1000)}초`; }, 500);
  };

  const showBtn = root.querySelector("#show-answer");
  showBtn.onclick = () => {
    root.querySelector("#answer").hidden = false;
    showBtn.hidden = true;
    markDone();
  };
  root.querySelector("#a-say").onclick = () => speak(p.answer);
  root.querySelector("#a-slow").onclick = () => speak(p.answer, 0.7);
  root.querySelector("#a-shadow").onclick = e => practiceSpeak(e.currentTarget, p.answer, root.querySelector("#a-res"));
}

/* ---------- shell ---------- */

const renderers = { study: renderStudy, phrases: renderPhrases, qa: renderQA };

document.querySelectorAll(".tabs button").forEach(b => b.onclick = () => {
  if (activeRec) activeRec.stop();
  document.querySelectorAll(".tabs button").forEach(x => x.classList.toggle("active", x === b));
  document.querySelectorAll(".view").forEach(v => v.hidden = v.id !== `view-${b.dataset.view}`);
  renderers[b.dataset.view]();
  window.scrollTo(0, 0);
});

$("#theme-toggle").onclick = () => {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
};

renderStudy();

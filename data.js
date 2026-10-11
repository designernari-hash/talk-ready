const MODULES = [
  {
    id: "w1",
    title: "Week 1",
    subtitle: "Design leadership as a creative practice",
    categories: [
      {
        id: "w1-open",
        title: "학습한 내용 꺼내기",
        desc: "대화를 시작하며 내가 읽은 것 공유",
        phrases: [
          ["What stood out to me in this week's notes was ...", "이번 주 노트에서 제게 가장 눈에 띈 건 ... 였어요."],
          ["The line that really stuck with me was \"Your presence sets the tone before your words do.\"", "제 마음에 남은 문장은 \"말보다 존재감이 먼저 분위기를 만든다\"였어요."],
          ["I found the idea of reframing our superpowers really interesting.", "우리의 강점을 재정의한다는 개념이 정말 흥미로웠어요."],
          ["Reading about experimentation made me think about my own team.", "실험에 대한 부분을 읽으면서 우리 팀을 떠올리게 됐어요."],
          ["Before reading this, I'd never thought of leadership as a creative practice.", "이걸 읽기 전에는 리더십을 창의적인 실천으로 생각해 본 적이 없었어요."],
          ["Can I start by sharing my reflection?", "제가 먼저 제 생각을 공유해도 될까요?"],
          ["Which part resonated with you the most?", "어떤 부분이 가장 와닿으셨어요?"],
          ["Did anything surprise you in the reading?", "읽으면서 놀라웠던 부분이 있었나요?"]
        ]
      },
      {
        id: "w1-tone",
        title: "Set the tone 의견 나누기",
        desc: "존재감, 에너지, 진정성",
        phrases: [
          ["I realized my presence sends signals even when I don't say anything.", "제가 아무 말을 하지 않아도 제 존재감이 신호를 보낸다는 걸 깨달았어요."],
          ["I naturally bring a calm tone, and I think my team feels safe because of it.", "저는 자연스럽게 차분한 분위기를 만드는데, 그래서 팀이 편안해하는 것 같아요."],
          ["Honestly, I sometimes perform a tone instead of being authentic.", "솔직히 가끔은 진정성 있게 하기보다 분위기를 연기할 때가 있어요."],
          ["I feel most like myself when I'm making things with the team.", "팀과 함께 무언가를 만들 때 가장 나다워요."],
          ["Long status meetings drain me, so I try to keep them short.", "긴 진행 상황 회의는 에너지를 빼앗아서 짧게 하려고 해요."],
          ["How do you stay authentic when you're under pressure?", "압박을 받을 때 어떻게 진정성을 유지하세요?"],
          ["What tone do you think you bring to your team?", "본인은 팀에 어떤 분위기를 가져온다고 생각하세요?"],
          ["What's one small moment where you could set the tone more intentionally?", "분위기를 더 의식적으로 만들 수 있는 작은 순간이 있다면 언제일까요?"]
        ]
      },
      {
        id: "w1-superpower",
        title: "Reframe your superpowers 의견 나누기",
        desc: "디자이너 강점이 리더십으로 진화",
        phrases: [
          ["As an IC, my superpower was attention to detail.", "실무자일 때 제 강점은 디테일에 대한 집중이었어요."],
          ["As a leader, I use it to spot risks before they surface.", "리더로서는 그걸로 문제가 드러나기 전에 리스크를 찾아요."],
          ["I used to prototype fast. Now I help the team move from ambiguity to clarity.", "예전엔 빠르게 프로토타입을 만들었는데, 지금은 팀이 모호함에서 명확함으로 가도록 도와요."],
          ["The one I relate to most is \"connecting dots.\"", "제가 가장 공감한 건 '연결점 찾기'예요."],
          ["The one I want to grow into is \"driving alignment.\"", "제가 키워 가고 싶은 건 '방향 맞추기'예요."],
          ["It was reassuring to read that our skills don't disappear. They evolve.", "우리 역량이 사라지는 게 아니라 진화한다는 걸 읽고 안심이 됐어요."],
          ["Which superpower do you think you've already reframed?", "본인은 어떤 강점을 이미 재정의했다고 생각하세요?"],
          ["Was there one on the list that felt hard for you?", "목록 중에 어렵게 느껴진 게 있었나요?"]
        ]
      },
      {
        id: "w1-experiment",
        title: "Embrace experimentation 의견 나누기",
        desc: "작은 실험, 회고, 실패를 데이터로",
        phrases: [
          ["I like the idea of treating leadership changes as small experiments.", "리더십 변화를 작은 실험으로 다룬다는 생각이 좋았어요."],
          ["Naming the experiment out loud seems like a great way to lower the stakes.", "실험이라고 소리 내어 말하는 건 부담을 줄이는 좋은 방법 같아요."],
          ["One experiment I'd like to try is opening meetings with a quick check-in.", "해 보고 싶은 실험 하나는 짧은 체크인으로 회의를 시작하는 거예요."],
          ["I'll try it for two weeks and then reflect on what worked.", "2주 동안 해 보고 뭐가 잘 됐는지 돌아볼게요."],
          ["I once tried something that didn't work, but it taught me a lot.", "예전에 해 본 게 잘 안 됐는데, 그걸로 많이 배웠어요."],
          ["\"Collect signal, not validation\" was a good reminder for me.", "'인정이 아니라 신호를 모으라'는 말이 제게 좋은 상기가 됐어요."],
          ["Have you ever run an experiment like this with your team?", "팀과 이런 실험을 해 보신 적 있으세요?"],
          ["How would you know if the experiment is working?", "실험이 잘 되고 있는지 어떻게 알 수 있을까요?"]
        ]
      },
      {
        id: "w1-react",
        title: "동료 의견에 반응하기",
        desc: "공감, 경험 연결, 다른 관점",
        phrases: [
          ["That really resonates with me.", "그 말이 정말 와닿아요."],
          ["I had a similar experience when ...", "저도 ... 했을 때 비슷한 경험이 있었어요."],
          ["That's interesting. In my team, it's actually the opposite.", "흥미롭네요. 저희 팀은 사실 반대예요."],
          ["I hadn't thought about it that way.", "그렇게는 생각해 보지 못했어요."],
          ["Building on what you just said, ...", "방금 말씀하신 것에 이어서, ..."],
          ["I see your point, but I think it also depends on the team culture.", "무슨 말씀인지 알겠는데, 팀 문화에 따라서도 다를 것 같아요."],
          ["That's a great example of reframing a superpower.", "강점을 재정의한 좋은 예시네요."],
          ["Thank you for being so open about that.", "그렇게 솔직하게 말씀해 주셔서 감사해요."]
        ]
      },
      {
        id: "w1-ask",
        title: "더 깊이 묻기",
        desc: "동료의 이야기를 끌어내는 질문",
        phrases: [
          ["Could you tell me more about that?", "그것에 대해 조금 더 말씀해 주시겠어요?"],
          ["What did that look like in practice?", "실제로는 어떤 모습이었어요?"],
          ["How did your team react?", "팀은 어떻게 반응했어요?"],
          ["What would you do differently next time?", "다음에는 어떻게 다르게 하실 것 같아요?"],
          ["So what you're saying is ...?", "그러니까 ... 라는 말씀이시죠?"],
          ["Sorry, could you say that again? I want to make sure I understand.", "죄송한데 다시 말씀해 주시겠어요? 제대로 이해하고 싶어서요."]
        ]
      },
      {
        id: "w1-wrap",
        title: "정리 · 마무리",
        desc: "토론에서 얻은 것 말하기",
        phrases: [
          ["My key takeaway from today is ...", "오늘 제 핵심 배움은 ... 예요."],
          ["After hearing everyone, I want to try ...", "모두의 이야기를 듣고 나니 ... 를 해 보고 싶어요."],
          ["It was helpful to hear how others set the tone in their teams.", "다른 분들이 팀에서 어떻게 분위기를 만드는지 듣는 게 도움이 됐어요."],
          ["I'll share how my experiment goes next week.", "다음 주에 제 실험이 어떻게 됐는지 공유할게요."],
          ["Thanks for sharing. I learned a lot from all of you.", "공유해 주셔서 감사해요. 여러분 모두에게 많이 배웠어요."]
        ]
      },
      {
        id: "w1-vocab",
        title: "1주차 핵심 어휘",
        desc: "토론에 계속 나오는 단어와 구",
        phrases: [
          ["set the tone", "분위기를 만들다, 기조를 정하다"],
          ["authentic, not performed", "연기하는 게 아니라 진정성 있는"],
          ["sustainable leadership", "지속 가능한 리더십"],
          ["energize / drain", "에너지를 주다 / 에너지를 빼앗다"],
          ["reframe my superpowers", "나의 강점을 새롭게 정의하다"],
          ["an individual contributor (IC)", "실무자 (관리자가 아닌 개인 기여자)"],
          ["from ambiguity to clarity", "모호함에서 명확함으로"],
          ["frame the \"why\" behind the work", "작업의 '왜'를 설명하다"],
          ["align stakeholders", "이해관계자들의 방향을 맞추다"],
          ["bridge silos", "단절된 조직을 연결하다"],
          ["a time-bound experiment", "기간이 정해진 실험"],
          ["change one variable at a time", "한 번에 하나의 변수만 바꾸다"],
          ["a reflect loop", "회고 루프"],
          ["collect signal, not validation", "인정이 아니라 신호를 모으다"],
          ["treat misses as data", "실패를 데이터로 여기다"]
        ]
      }
    ],
    prompts: [
      {
        q: "Before we start, what's one idea from this week's notes that stayed with you?",
        ko: "시작하기 전에, 이번 주 노트에서 마음에 남은 아이디어 하나는 무엇인가요?",
        answer: "The idea that stayed with me was \"Your presence sets the tone before your words do.\" I used to think tone was about what I say in meetings. But now I realize my team reads my mood and energy even before I speak. So I want to be more aware of how I show up.",
        answerKo: "제게 남은 아이디어는 \"말보다 존재감이 먼저 분위기를 만든다\"였어요. 예전엔 분위기가 회의에서 하는 말에 달렸다고 생각했어요. 그런데 이제는 팀이 제가 말하기도 전에 제 기분과 에너지를 읽는다는 걸 깨달았어요. 그래서 제가 어떤 모습으로 나타나는지 더 의식하고 싶어요.",
        starters: ["The idea that stayed with me was ...", "I used to think ..., but now ...", "So I want to ..."]
      },
      {
        q: "Why do you think this course calls leadership a creative practice?",
        ko: "이 과정에서는 왜 리더십을 창의적인 실천이라고 부른다고 생각하나요?",
        answer: "I think it's because leadership is not a fixed formula. As designers, we prototype, test, and iterate. We can lead in the same way. We can try small things, learn from them, and adjust. That makes leadership feel less scary and more human to me.",
        answerKo: "리더십은 정해진 공식이 아니기 때문인 것 같아요. 디자이너로서 우리는 프로토타입을 만들고, 테스트하고, 반복해요. 리더십도 같은 방식으로 할 수 있어요. 작은 걸 시도하고, 배우고, 조정하는 거죠. 그래서 리더십이 덜 무섭고 더 인간적으로 느껴져요.",
        starters: ["I think it's because ...", "As designers, we ...", "We can lead in the same way by ..."]
      },
      {
        q: "What signals do you think your presence sends to your team?",
        ko: "당신의 존재감은 팀에게 어떤 신호를 보낸다고 생각하나요?",
        answer: "I think I send a calm and steady signal. My team often says they feel comfortable asking me questions. But when I'm busy, I tend to look serious, and people hesitate to come to me. I want to be more aware of that.",
        answerKo: "저는 차분하고 안정적인 신호를 주는 것 같아요. 팀원들이 제게 질문하기 편하다고 자주 말해요. 그런데 바쁠 때는 표정이 진지해져서 사람들이 다가오기를 망설여요. 그 부분을 더 의식하고 싶어요.",
        starters: ["I think my presence sends ...", "My team often says ...", "But when I'm ..., I tend to ..."]
      },
      {
        q: "Where do you feel most yourself as a leader, and where do you feel pressure to act differently?",
        ko: "리더로서 언제 가장 나답다고 느끼고, 언제 다르게 행동해야 한다는 압박을 느끼나요?",
        answer: "I feel most like myself in design critiques, when we sketch and talk about ideas together. I feel pressure in meetings with senior stakeholders. There, I feel like I have to sound more confident and serious than I really am.",
        answerKo: "디자인 크리틱에서 함께 스케치하고 아이디어를 이야기할 때 가장 나다워요. 고위 이해관계자와의 회의에서는 압박을 느껴요. 그 자리에서는 실제보다 더 자신감 있고 진지하게 말해야 할 것 같거든요.",
        starters: ["I feel most like myself when ...", "I feel pressure when ...", "There, I feel like I have to ..."]
      },
      {
        q: "What activities energize you, and which ones drain you?",
        ko: "어떤 활동이 에너지를 주고, 어떤 활동이 에너지를 빼앗나요?",
        answer: "Hands-on making and one-on-one conversations really energize me. On the other hand, long status meetings and lots of emails drain me. So I try to block time for making, and I keep status meetings short.",
        answerKo: "직접 만드는 일과 일대일 대화는 정말 에너지를 줘요. 반면에 긴 진행 상황 회의와 많은 이메일은 에너지를 빼앗아요. 그래서 만드는 시간을 따로 확보하고, 진행 회의는 짧게 하려고 해요.",
        starters: ["... really energizes me.", "On the other hand, ... drains me.", "So I try to ..."]
      },
      {
        q: "Can you share a small moment this week where you could set the tone more intentionally?",
        ko: "이번 주에 분위기를 더 의식적으로 만들 수 있는 작은 순간을 공유해 주시겠어요?",
        answer: "Our Monday team meeting. Usually I jump straight into the tasks. This week, I want to start with a two-minute check-in, like asking everyone how their weekend was. I hope it makes the meeting feel warmer.",
        answerKo: "월요일 팀 회의요. 보통은 바로 업무로 들어가요. 이번 주에는 주말 어땠는지 묻는 것처럼 2분짜리 체크인으로 시작해 보고 싶어요. 회의가 더 따뜻하게 느껴지길 바라요.",
        starters: ["This week, I could ...", "Usually I ..., but this time I'll ...", "I hope it ..."]
      },
      {
        q: "Which superpower on the list do you relate to the most? How has it evolved?",
        ko: "목록 중 어떤 강점에 가장 공감하나요? 그것은 어떻게 진화했나요?",
        answer: "I relate most to \"connecting dots.\" As a designer, I was good at finding patterns in research. Now, as a lead, I use the same skill to connect people across teams, like design and engineering. It helps us build shared understanding.",
        answerKo: "저는 '연결점 찾기'에 가장 공감해요. 디자이너일 때는 리서치에서 패턴을 잘 찾았어요. 이제 리드로서는 같은 능력으로 디자인과 개발처럼 여러 팀의 사람들을 연결해요. 그게 공통된 이해를 만드는 데 도움이 돼요.",
        starters: ["I relate most to ...", "As a designer, I was good at ...", "Now, as a lead, I use it to ..."]
      },
      {
        q: "What's the hardest part of moving from an individual contributor to a leader?",
        ko: "실무자에서 리더로 전환할 때 가장 어려운 점은 무엇인가요?",
        answer: "For me, the hardest part is letting go of the details. I want to fix things myself because it's faster. But I'm learning that my job now is to coach my team, not to do the work for them.",
        answerKo: "제게 가장 어려운 건 디테일을 내려놓는 거예요. 더 빠르니까 제가 직접 고치고 싶어져요. 그런데 이제 제 역할은 팀 대신 일하는 게 아니라 팀을 코칭하는 거라는 걸 배우고 있어요.",
        starters: ["For me, the hardest part is ...", "I want to ... because ...", "But I'm learning that ..."]
      },
      {
        q: "Which superpower would you like to develop next?",
        ko: "다음으로 키우고 싶은 강점은 무엇인가요?",
        answer: "I'd like to develop \"driving alignment.\" Right now, I can align my own team, but it's harder with other teams and senior leaders. I want to get better at framing the why, so people understand the value of design.",
        answerKo: "'방향 맞추기'를 키우고 싶어요. 지금은 우리 팀은 맞출 수 있지만, 다른 팀이나 고위 리더와는 더 어려워요. '왜'를 잘 설명해서 사람들이 디자인의 가치를 이해하게 만들고 싶어요.",
        starters: ["I'd like to develop ...", "Right now, I can ..., but ...", "I want to get better at ..."]
      },
      {
        q: "What's one leadership experiment you'd like to try, and how will you run it?",
        ko: "해 보고 싶은 리더십 실험 하나와 그것을 어떻게 진행할지 말해 주세요.",
        answer: "I'd like to try a new feedback format in our design reviews. I'll ask the designer to share what kind of feedback they want first. I'll try it for two weeks, and I'll tell the team it's an experiment. Then we'll reflect on what worked.",
        answerKo: "디자인 리뷰에서 새로운 피드백 방식을 시도해 보고 싶어요. 디자이너가 먼저 어떤 피드백을 원하는지 말하게 할 거예요. 2주 동안 해 보고, 팀에 이게 실험이라고 알릴 거예요. 그다음에 뭐가 잘 됐는지 함께 돌아볼 거예요.",
        starters: ["One experiment I'd like to try is ...", "I'll try it for ...", "Then we'll reflect on ..."]
      },
      {
        q: "How will you know if your experiment is working?",
        ko: "실험이 잘 되고 있는지 어떻게 알 수 있을까요?",
        answer: "I'll look for signals, not validation. For example, are people speaking up more? Is there more energy in the room? I won't just ask whether they liked it. I'll watch how the team actually behaves.",
        answerKo: "인정이 아니라 신호를 볼 거예요. 예를 들어 사람들이 더 많이 의견을 내는지, 분위기에 에너지가 더 있는지요. 그냥 좋았는지만 묻지 않고, 팀이 실제로 어떻게 행동하는지 지켜볼 거예요.",
        starters: ["I'll look for signals like ...", "For example, ...", "I won't just ...; I'll ..."]
      },
      {
        q: "Tell us about a time something didn't work. What did it teach you?",
        ko: "무언가가 잘 되지 않았던 때를 이야기해 주세요. 그것에서 무엇을 배웠나요?",
        answer: "Once, I tried daily stand-ups with my team, but people found them too frequent. At first, I felt like I failed. But it taught me that my team prefers fewer, deeper conversations. Now we meet twice a week, and it works better.",
        answerKo: "예전에 팀과 매일 스탠드업을 해 봤는데, 사람들이 너무 잦다고 느꼈어요. 처음에는 실패한 것 같았어요. 그런데 우리 팀은 적지만 깊은 대화를 더 좋아한다는 걸 배웠어요. 지금은 일주일에 두 번 만나고, 그게 더 잘 맞아요.",
        starters: ["Once, I tried ...", "At first, I felt ...", "But it taught me that ..."]
      },
      {
        q: "Does anyone want to build on that or share a different view?",
        ko: "이 이야기에 덧붙이거나 다른 관점을 나누고 싶은 분 있나요?",
        answer: "Yes, I'd like to build on that. I agree that small experiments lower the pressure. But in my company, people are not used to trying things openly. So I think it's important to explain why we're experimenting first.",
        answerKo: "네, 덧붙이고 싶어요. 작은 실험이 부담을 줄인다는 데 동의해요. 그런데 저희 회사에서는 사람들이 공개적으로 시도하는 데 익숙하지 않아요. 그래서 왜 실험하는지 먼저 설명하는 게 중요하다고 생각해요.",
        starters: ["Yes, I'd like to build on that.", "I agree that ..., but ...", "So I think it's important to ..."]
      },
      {
        q: "What's your key takeaway from today's session?",
        ko: "오늘 세션에서 핵심적으로 얻은 것은 무엇인가요?",
        answer: "My key takeaway is that I don't need to copy someone else's leadership style. I can find a tone that fits me and test it through small experiments. I'm going to start with my Monday meeting this week.",
        answerKo: "제 핵심 배움은 다른 사람의 리더십 스타일을 따라 할 필요가 없다는 거예요. 나에게 맞는 분위기를 찾고 작은 실험으로 시험해 볼 수 있어요. 이번 주 월요일 회의부터 시작해 볼게요.",
        starters: ["My key takeaway is that ...", "I can ...", "I'm going to start with ..."]
      }
    ]
  },
  {
    id: "basic",
    title: "기본 표현",
    subtitle: "매주 토론에서 쓰는 표현",
    categories: [
      {
        id: "intro",
        title: "자기소개 · 스몰토크",
        desc: "첫 만남, 쉬는 시간",
        phrases: [
          ["Hi, I'm Nari. I'm a designer from Seoul.", "안녕하세요, 저는 나리예요. 서울에서 온 디자이너예요."],
          ["I lead a small design team.", "저는 작은 디자인 팀을 이끌고 있어요."],
          ["What kind of design do you work on?", "어떤 디자인 일을 하세요?"],
          ["Nice to meet you. Where are you based?", "반가워요. 어디에서 활동하세요?"],
          ["How are you finding the program so far?", "지금까지 프로그램 어떠세요?"],
          ["That sounds really interesting. Tell me more.", "정말 흥미롭네요. 더 얘기해 주세요."],
          ["My English isn't perfect, so please bear with me.", "영어가 완벽하지 않으니 조금 양해 부탁드려요."]
        ]
      },
      {
        id: "opinion",
        title: "의견 말하기",
        desc: "내 생각을 꺼낼 때",
        phrases: [
          ["In my opinion, ...", "제 생각에는, ..."],
          ["The way I see it, ...", "제가 보기에는, ..."],
          ["I'd like to add something here.", "여기에 하나 덧붙이고 싶어요."],
          ["My main point is that ...", "제 요점은 ... 라는 거예요."],
          ["The reason I think so is ...", "제가 그렇게 생각하는 이유는 ..."],
          ["In my experience, ...", "제 경험으로는, ..."],
          ["I'm not 100% sure, but I think ...", "100% 확신은 없지만, ... 인 것 같아요."]
        ]
      },
      {
        id: "agree",
        title: "동의하기",
        desc: "맞장구, 이어받기",
        phrases: [
          ["That's a good point.", "좋은 지적이에요."],
          ["I was thinking the same thing.", "저도 같은 생각이었어요."],
          ["Building on what you said, ...", "말씀하신 것에 이어서, ..."],
          ["That really resonates with me.", "그 말이 정말 와닿아요."],
          ["I agree, and I'd also add that ...", "동의해요, 그리고 ... 도 덧붙이고 싶어요."]
        ]
      },
      {
        id: "disagree",
        title: "정중하게 반대하기",
        desc: "부드럽게 다른 의견 내기",
        phrases: [
          ["I see your point, but ...", "무슨 말씀인지 알겠지만, ..."],
          ["I have a slightly different view.", "저는 조금 다르게 생각해요."],
          ["That's true, but have you considered ...?", "맞는 말이지만, ... 도 고려해 보셨어요?"],
          ["I understand, but what about ...?", "이해해요, 그런데 ... 는 어떨까요?"],
          ["I think it depends on the context.", "상황에 따라 다를 것 같아요."]
        ]
      },
      {
        id: "turn",
        title: "끼어들기 · 발언권",
        desc: "말할 타이밍 잡기",
        phrases: [
          ["Sorry to interrupt, but ...", "끼어들어서 죄송한데요, ..."],
          ["Can I jump in here?", "제가 여기서 한마디 해도 될까요?"],
          ["Please, go ahead.", "먼저 말씀하세요."],
          ["Sorry, let me finish my thought.", "죄송한데 제 말 마저 할게요."],
          ["Going back to what you said earlier, ...", "아까 말씀하신 것으로 돌아가서, ..."],
          ["I'd love to hear what others think.", "다른 분들 생각도 듣고 싶어요."]
        ]
      },
      {
        id: "clarify",
        title: "못 알아들었을 때 · 확인",
        desc: "당황하지 않고 다시 묻기",
        phrases: [
          ["Sorry, could you say that again?", "죄송한데 다시 한번 말씀해 주시겠어요?"],
          ["Could you speak a little more slowly?", "조금만 천천히 말씀해 주시겠어요?"],
          ["What do you mean by ...?", "... 가 무슨 뜻이에요?"],
          ["So what you're saying is ...?", "그러니까 ... 라는 말씀이시죠?"],
          ["Sorry, I didn't catch that last part.", "죄송한데 마지막 부분을 못 들었어요."],
          ["Could you give me an example?", "예를 하나 들어 주시겠어요?"]
        ]
      },
      {
        id: "time",
        title: "시간 벌기",
        desc: "생각할 시간이 필요할 때",
        phrases: [
          ["That's a good question.", "좋은 질문이네요."],
          ["Let me think about that for a second.", "잠깐 생각해 볼게요."],
          ["How can I put this?", "이걸 어떻게 표현하면 좋을까요?"],
          ["I don't know the exact word, but ...", "정확한 단어는 모르겠지만, ..."],
          ["Let me draw it. It's easier to show.", "그려서 보여 드릴게요. 그게 더 쉬워요."]
        ]
      },
      {
        id: "wrap",
        title: "정리 · 마무리",
        desc: "내 말을 끝맺을 때",
        phrases: [
          ["To sum up, ...", "정리하자면, ..."],
          ["So the key takeaway for me is ...", "그래서 제게 핵심은 ..."],
          ["That's all from me. Thank you.", "제 이야기는 여기까지예요. 감사합니다."],
          ["Thanks for sharing. I learned a lot.", "공유해 주셔서 감사해요. 많이 배웠어요."]
        ]
      }
    ]
  }
];

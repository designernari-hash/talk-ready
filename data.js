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
          ["One thing I liked in the reading was ...", "읽은 내용 중에 좋았던 건 ... 예요."],
          ["This line stayed with me: \"Your presence sets the tone.\"", "이 문장이 기억에 남았어요: \"당신의 존재가 분위기를 만든다.\""],
          ["The superpower part was really interesting.", "강점(superpower) 부분이 정말 재미있었어요."],
          ["The part about trying small things made me think of my team.", "작은 걸 시도해 보라는 부분을 읽고 우리 팀이 생각났어요."],
          ["I never thought of leading as something creative.", "리더 역할을 창의적인 일로 생각해 본 적이 없었어요."],
          ["Can I go first?", "제가 먼저 말해도 될까요?"],
          ["Which part did you like the most?", "어떤 부분이 제일 좋았어요?"],
          ["Was anything new to you?", "새롭게 느낀 게 있었어요?"]
        ]
      },
      {
        id: "w1-tone",
        title: "Set the tone 의견 나누기",
        desc: "나의 분위기, 에너지, 나다움",
        phrases: [
          ["My team can feel my mood, even when I don't say anything.", "제가 아무 말 안 해도 팀은 제 기분을 느껴요."],
          ["I'm a calm person, so my team feels relaxed.", "저는 차분한 편이라 팀이 편하게 느껴요."],
          ["To be honest, sometimes I act like someone else.", "솔직히 가끔은 다른 사람처럼 행동해요."],
          ["I feel most like me when I make things with my team.", "팀이랑 뭔가 만들 때 가장 나다워요."],
          ["Long meetings make me tired, so I keep them short.", "긴 회의는 저를 지치게 해서 짧게 해요."],
          ["How do you stay yourself when you're stressed?", "스트레스 받을 때 어떻게 본인다움을 지켜요?"],
          ["How would your team describe you?", "팀원들은 당신을 어떻게 말할 것 같아요?"],
          ["What's one small thing you can try this week?", "이번 주에 해 볼 수 있는 작은 것 하나는 뭐예요?"]
        ]
      },
      {
        id: "w1-superpower",
        title: "Reframe your superpowers 의견 나누기",
        desc: "디자이너 강점을 리더 강점으로",
        phrases: [
          ["As a designer, I was good at details.", "디자이너일 때 저는 디테일에 강했어요."],
          ["Now I use that to find problems early.", "지금은 그걸로 문제를 일찍 찾아요."],
          ["I used to make things fast. Now I help my team see clearly.", "예전엔 빨리 만들었는데, 지금은 팀이 방향을 분명히 보게 도와요."],
          ["The one I connect with the most is \"connecting dots.\"", "제가 제일 공감한 건 '연결점 찾기'예요."],
          ["I want to get better at getting everyone on the same page.", "모두가 같은 생각을 하도록 맞추는 걸 더 잘하고 싶어요."],
          ["It was nice to read that our skills don't go away. They grow.", "우리 실력이 사라지는 게 아니라 자란다는 걸 읽어서 좋았어요."],
          ["What's your superpower?", "당신의 강점은 뭐예요?"],
          ["Which one was hard for you?", "어떤 게 어렵게 느껴졌어요?"]
        ]
      },
      {
        id: "w1-experiment",
        title: "Embrace experimentation 의견 나누기",
        desc: "작게 시도하고, 돌아보고, 배우기",
        phrases: [
          ["I like the idea of trying small things first.", "작은 것부터 시도해 본다는 생각이 좋았어요."],
          ["If you say \"Let's try this,\" people feel less pressure.", "\"이거 한번 해 봐요\"라고 말하면 사람들이 부담을 덜 느껴요."],
          ["I want to start meetings with a quick hello and how's everyone.", "회의를 짧은 인사와 안부로 시작해 보고 싶어요."],
          ["I'll try it for two weeks and see how it goes.", "2주 동안 해 보고 어떻게 되는지 볼게요."],
          ["I tried something once, and it didn't work. But I learned a lot.", "예전에 뭘 해 봤는데 잘 안 됐어요. 그래도 많이 배웠어요."],
          ["Don't just ask if people like it. Watch how they act.", "좋아하는지만 묻지 말고, 어떻게 행동하는지 보세요."],
          ["Have you tried something like this with your team?", "팀이랑 이런 걸 해 본 적 있어요?"],
          ["How will you know it's working?", "잘 되고 있는지 어떻게 알 수 있을까요?"]
        ]
      },
      {
        id: "w1-react",
        title: "동료 의견에 반응하기",
        desc: "공감, 내 경험 연결, 다른 생각",
        phrases: [
          ["I feel the same way.", "저도 같은 마음이에요."],
          ["Same here. I had something like that too.", "저도요. 저도 비슷한 일이 있었어요."],
          ["Oh, that's interesting. In my team, it's the opposite.", "오, 재밌네요. 저희 팀은 반대예요."],
          ["I never thought about it that way.", "그렇게는 생각 못 해 봤어요."],
          ["Adding to what you said, ...", "말씀하신 거에 덧붙이면, ..."],
          ["I get it, but I think it depends on the team.", "무슨 말인지 알겠는데, 팀마다 다를 것 같아요."],
          ["That's a great example.", "좋은 예시네요."],
          ["Thanks for sharing that.", "얘기해 줘서 고마워요."]
        ]
      },
      {
        id: "w1-ask",
        title: "더 깊이 묻기",
        desc: "동료 이야기를 더 끌어내는 질문",
        phrases: [
          ["Can you tell me more?", "좀 더 얘기해 줄래요?"],
          ["What did that look like?", "그게 실제로 어땠어요?"],
          ["How did your team feel about it?", "팀은 그걸 어떻게 느꼈어요?"],
          ["What would you do next time?", "다음엔 어떻게 할 것 같아요?"],
          ["So you mean ...?", "그러니까 ... 라는 말이죠?"],
          ["Sorry, can you say that one more time?", "미안한데 한 번만 더 말해 줄래요?"]
        ]
      },
      {
        id: "w1-wrap",
        title: "정리 · 마무리",
        desc: "토론에서 얻은 것 말하기",
        phrases: [
          ["The big thing I learned today is ...", "오늘 배운 가장 큰 건 ... 예요."],
          ["After hearing everyone, I want to try ...", "모두의 얘기를 듣고 나니 ... 를 해 보고 싶어요."],
          ["It was really helpful to hear your stories.", "여러분 이야기를 들은 게 정말 도움이 됐어요."],
          ["I'll tell you how it goes next week.", "다음 주에 어떻게 됐는지 말해 줄게요."],
          ["Thanks, everyone. I learned a lot.", "모두 고마워요. 많이 배웠어요."]
        ]
      },
      {
        id: "w1-vocab",
        title: "1주차 수업 단어",
        desc: "강사가 쓰는 말과 쉬운 뜻",
        phrases: [
          ["set the tone (= make the mood)", "분위기를 만들다"],
          ["presence (= how you show up)", "존재감, 내가 사람들 앞에 있는 모습"],
          ["authentic (= real, true to you)", "진짜의, 나다운"],
          ["energize / drain (= give energy / take energy)", "에너지를 주다 / 빼앗다"],
          ["superpower (= your best skill)", "강점, 가장 잘하는 것"],
          ["reframe (= see it in a new way)", "새롭게 보다, 다시 정의하다"],
          ["IC, individual contributor (= someone who does the work, not a manager)", "실무자 (관리자가 아닌 사람)"],
          ["ambiguity (= not clear)", "모호함, 불분명함"],
          ["stakeholders (= people who care about the project)", "이해관계자"],
          ["alignment (= everyone on the same page)", "모두 같은 방향을 보는 것"],
          ["experiment (= try something new)", "실험, 시도"],
          ["reflect (= look back and think)", "돌아보다, 회고하다"],
          ["signal, not validation (= look at what people do, not just praise)", "칭찬보다 실제 반응을 보라"],
          ["treat misses as data (= learn from mistakes)", "실수에서 배워라"]
        ]
      }
    ],
    prompts: [
      {
        q: "Before we start, what's one idea from the reading that stayed with you?",
        ko: "시작하기 전에, 읽은 내용 중 기억에 남은 생각 하나는 뭐예요?",
        answer: "For me, it was \"Your presence sets the tone.\" I used to think only my words mattered. But my team can feel my mood before I even talk. So I want to be more careful about how I show up.",
        answerKo: "저는 \"당신의 존재가 분위기를 만든다\"였어요. 예전엔 제 말만 중요하다고 생각했어요. 그런데 팀은 제가 말하기도 전에 제 기분을 느껴요. 그래서 제가 어떤 모습으로 있는지 더 신경 쓰고 싶어요.",
        starters: ["For me, it was ...", "I used to think ..., but ...", "So I want to ..."]
      },
      {
        q: "Why do you think we call leadership a creative practice?",
        ko: "왜 리더십을 창의적인 실천이라고 부른다고 생각해요?",
        answer: "I think it's because there's no one right answer. As designers, we try, test, and change things. We can lead the same way. Try something small, learn, and fix it. That makes it feel less scary.",
        answerKo: "정답이 하나가 아니라서 그런 것 같아요. 디자이너로서 우리는 시도하고, 테스트하고, 바꿔요. 리더 역할도 똑같이 할 수 있어요. 작게 해 보고, 배우고, 고치는 거죠. 그러면 덜 무섭게 느껴져요.",
        starters: ["I think it's because ...", "As designers, we ...", "We can lead the same way."]
      },
      {
        q: "What do you think your team feels from you?",
        ko: "팀이 당신에게서 어떤 느낌을 받는다고 생각해요?",
        answer: "I think they feel I'm calm and easy to talk to. They ask me questions a lot. But when I'm busy, I look serious, and they don't come to me. I want to work on that.",
        answerKo: "제가 차분하고 말 걸기 편하다고 느끼는 것 같아요. 저한테 질문을 많이 해요. 그런데 바쁠 때는 표정이 심각해져서 잘 안 와요. 그 부분을 고치고 싶어요.",
        starters: ["I think they feel I'm ...", "They often ...", "But when I'm busy, ..."]
      },
      {
        q: "When do you feel most like yourself as a leader? When do you feel you have to act differently?",
        ko: "리더로서 언제 가장 나답다고 느껴요? 언제 다르게 행동해야 한다고 느껴요?",
        answer: "I feel most like me when we sketch ideas together. But in meetings with big bosses, I feel I have to look more serious and sure than I really am.",
        answerKo: "같이 아이디어를 스케치할 때 가장 나다워요. 그런데 높은 분들과의 회의에서는 실제보다 더 진지하고 확신 있어 보여야 할 것 같아요.",
        starters: ["I feel most like me when ...", "But when ..., I feel I have to ..."]
      },
      {
        q: "What gives you energy, and what takes your energy away?",
        ko: "무엇이 에너지를 주고, 무엇이 에너지를 빼앗아요?",
        answer: "Making things with my hands gives me energy. One-on-one talks too. But long meetings and too many emails make me tired. So I save time for making, and I keep meetings short.",
        answerKo: "손으로 직접 만드는 게 에너지를 줘요. 일대일 대화도요. 그런데 긴 회의랑 너무 많은 이메일은 저를 지치게 해요. 그래서 만드는 시간을 따로 빼 두고, 회의는 짧게 해요.",
        starters: ["... gives me energy.", "But ... makes me tired.", "So I ..."]
      },
      {
        q: "What's one small moment this week where you can set a better tone?",
        ko: "이번 주에 더 좋은 분위기를 만들 수 있는 작은 순간은 언제예요?",
        answer: "Our Monday team meeting. I usually jump right into work. This week, I want to start by asking, \"How was your weekend?\" I hope it feels warmer.",
        answerKo: "월요일 팀 회의요. 보통은 바로 일 얘기로 들어가요. 이번 주에는 \"주말 어땠어요?\"로 시작해 보고 싶어요. 더 따뜻하게 느껴지면 좋겠어요.",
        starters: ["This week, I can ...", "I usually ..., but this time ...", "I hope ..."]
      },
      {
        q: "Which superpower on the list do you connect with most? How has it changed?",
        ko: "목록 중 어떤 강점에 가장 공감해요? 그게 어떻게 바뀌었어요?",
        answer: "\"Connecting dots.\" As a designer, I was good at finding patterns in research. Now I use it to connect people, like designers and engineers. It helps everyone understand each other.",
        answerKo: "'연결점 찾기'요. 디자이너일 때는 리서치에서 패턴을 잘 찾았어요. 지금은 그걸로 디자이너와 개발자처럼 사람들을 연결해요. 모두가 서로를 이해하는 데 도움이 돼요.",
        starters: ["The one I connect with is ...", "As a designer, I was good at ...", "Now I use it to ..."]
      },
      {
        q: "What's the hardest part about going from designer to leader?",
        ko: "디자이너에서 리더가 될 때 가장 어려운 점은 뭐예요?",
        answer: "Letting go of the details. I want to fix things myself because it's faster. But now my job is to help my team grow, not do the work for them.",
        answerKo: "디테일을 내려놓는 거요. 더 빠르니까 제가 직접 고치고 싶어요. 그런데 이제 제 일은 팀 대신 일하는 게 아니라 팀이 성장하게 돕는 거예요.",
        starters: ["For me, it's ...", "I want to ... because ...", "But now my job is to ..."]
      },
      {
        q: "Which superpower do you want to build next?",
        ko: "다음으로 키우고 싶은 강점은 뭐예요?",
        answer: "Getting everyone on the same page. It's easy with my own team, but hard with other teams and bosses. I want to get better at explaining why design matters.",
        answerKo: "모두가 같은 생각을 하게 맞추는 거요. 우리 팀이랑은 쉬운데, 다른 팀이나 윗분들과는 어려워요. 디자인이 왜 중요한지 더 잘 설명하고 싶어요.",
        starters: ["I want to get better at ...", "It's easy with ..., but hard with ..."]
      },
      {
        q: "What's one small thing you want to try as a leader? How will you do it?",
        ko: "리더로서 해 보고 싶은 작은 시도 하나는 뭐예요? 어떻게 할 거예요?",
        answer: "I want to try a new way of giving feedback. First, I'll ask the designer, \"What kind of feedback do you want?\" I'll try it for two weeks. Then we'll talk about what worked.",
        answerKo: "피드백을 새로운 방식으로 줘 보고 싶어요. 먼저 디자이너에게 \"어떤 피드백을 원해요?\"라고 물어볼 거예요. 2주 동안 해 볼게요. 그다음에 뭐가 좋았는지 같이 얘기할 거예요.",
        starters: ["I want to try ...", "I'll try it for ...", "Then we'll talk about ..."]
      },
      {
        q: "How will you know if it's working?",
        ko: "그게 잘 되고 있는지 어떻게 알 수 있을까요?",
        answer: "I won't just ask if they like it. I'll watch what they do. Are people talking more? Do they look more excited? That tells me more than a \"yes.\"",
        answerKo: "좋아하는지만 묻지 않을 거예요. 사람들이 어떻게 하는지 볼 거예요. 말을 더 많이 하는지, 더 신나 보이는지요. 그게 \"네\"라는 대답보다 더 많은 걸 알려 줘요.",
        starters: ["I'll watch ...", "For example, ...", "That tells me ..."]
      },
      {
        q: "Tell us about a time something didn't work. What did you learn?",
        ko: "잘 안 됐던 때를 얘기해 주세요. 무엇을 배웠어요?",
        answer: "I once tried daily check-ins with my team. But people said it was too much. At first, I felt bad. But I learned my team likes fewer, longer talks. Now we meet twice a week, and it's much better.",
        answerKo: "예전에 팀이랑 매일 체크인을 해 봤어요. 그런데 다들 너무 많다고 했어요. 처음엔 기분이 안 좋았어요. 그런데 우리 팀은 적게, 길게 얘기하는 걸 좋아한다는 걸 배웠어요. 지금은 일주일에 두 번 만나는데, 훨씬 좋아요.",
        starters: ["I once tried ...", "At first, I felt ...", "But I learned ..."]
      },
      {
        q: "Does anyone want to add to that, or see it differently?",
        ko: "여기에 덧붙이거나 다르게 생각하는 분 있어요?",
        answer: "Yes, I'd like to add something. I agree that small tries take the pressure off. But in my company, people aren't used to trying new things. So I think we need to explain why first.",
        answerKo: "네, 하나 덧붙이고 싶어요. 작게 시도하면 부담이 줄어든다는 데 동의해요. 그런데 저희 회사는 새로운 걸 해 보는 데 익숙하지 않아요. 그래서 먼저 이유를 설명해야 한다고 생각해요.",
        starters: ["Yes, I'd like to add something.", "I agree that ..., but ...", "So I think ..."]
      },
      {
        q: "What's your main takeaway from today?",
        ko: "오늘 가장 크게 얻은 건 뭐예요?",
        answer: "I don't have to copy someone else's style. I can find a way that fits me and try it little by little. I'll start with my Monday meeting this week.",
        answerKo: "다른 사람의 스타일을 따라 할 필요가 없다는 거요. 나한테 맞는 방식을 찾아서 조금씩 해 보면 돼요. 이번 주 월요일 회의부터 시작할게요.",
        starters: ["My main takeaway is ...", "I can ...", "I'll start with ..."]
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
          ["I lead a small design team.", "저는 작은 디자인 팀을 이끌어요."],
          ["What kind of design do you do?", "어떤 디자인 하세요?"],
          ["Nice to meet you. Where are you from?", "반가워요. 어디서 오셨어요?"],
          ["How do you like the class so far?", "지금까지 수업 어때요?"],
          ["Oh, cool. Tell me more.", "오, 멋지네요. 더 얘기해 주세요."],
          ["My English isn't great, so please be patient with me.", "영어를 잘 못해서 조금만 기다려 주세요."]
        ]
      },
      {
        id: "opinion",
        title: "의견 말하기",
        desc: "내 생각을 꺼낼 때",
        phrases: [
          ["I think ...", "제 생각엔 ..."],
          ["For me, ...", "저한테는, ..."],
          ["Can I add something?", "하나 덧붙여도 될까요?"],
          ["My point is ...", "제 말은 ..."],
          ["That's because ...", "왜냐하면 ..."],
          ["In my case, ...", "제 경우에는, ..."],
          ["I'm not sure, but I think ...", "확실하진 않지만, ... 인 것 같아요."]
        ]
      },
      {
        id: "agree",
        title: "동의하기",
        desc: "맞장구, 이어받기",
        phrases: [
          ["Good point.", "좋은 말이에요."],
          ["I was just thinking that.", "저도 방금 그 생각 했어요."],
          ["Yeah, and also ...", "맞아요, 그리고 ..."],
          ["I totally get that.", "완전 이해돼요."],
          ["I agree. And I'd add ...", "동의해요. 그리고 ... 도 덧붙이고 싶어요."]
        ]
      },
      {
        id: "disagree",
        title: "부드럽게 다른 의견 내기",
        desc: "정중하게 반대할 때",
        phrases: [
          ["I see what you mean, but ...", "무슨 말인지 알겠는데, ..."],
          ["I see it a little differently.", "저는 조금 다르게 봐요."],
          ["That's true, but what about ...?", "맞아요, 그런데 ... 는요?"],
          ["Maybe, but I'm not so sure.", "그럴 수도 있는데, 저는 잘 모르겠어요."],
          ["I think it depends.", "상황에 따라 다를 것 같아요."]
        ]
      },
      {
        id: "turn",
        title: "끼어들기 · 발언권",
        desc: "말할 타이밍 잡기",
        phrases: [
          ["Sorry, can I jump in?", "미안한데, 제가 한마디 해도 될까요?"],
          ["Can I say something quick?", "짧게 하나 말해도 될까요?"],
          ["Go ahead.", "먼저 하세요."],
          ["Sorry, let me finish.", "미안한데 제 말 마저 할게요."],
          ["Going back to what you said, ...", "아까 하신 말로 돌아가서, ..."],
          ["What do you all think?", "다들 어떻게 생각해요?"]
        ]
      },
      {
        id: "clarify",
        title: "못 알아들었을 때 · 확인",
        desc: "당황하지 않고 다시 묻기",
        phrases: [
          ["Sorry, can you say that again?", "미안한데 다시 말해 줄래요?"],
          ["Can you speak a little slower?", "조금만 천천히 말해 줄래요?"],
          ["What does ... mean?", "... 가 무슨 뜻이에요?"],
          ["So you mean ...?", "그러니까 ... 라는 말이죠?"],
          ["Sorry, I missed the last part.", "미안한데 마지막 부분을 놓쳤어요."],
          ["Can you give me an example?", "예를 하나 들어 줄래요?"]
        ]
      },
      {
        id: "time",
        title: "시간 벌기",
        desc: "생각할 시간이 필요할 때",
        phrases: [
          ["Good question.", "좋은 질문이네요."],
          ["Let me think for a second.", "잠깐 생각해 볼게요."],
          ["How do I say this?", "이걸 어떻게 말하지?"],
          ["I don't know the word, but ...", "단어가 생각 안 나는데, ..."],
          ["Can I draw it? It's easier.", "그려도 될까요? 그게 더 쉬워요."]
        ]
      },
      {
        id: "wrap",
        title: "정리 · 마무리",
        desc: "내 말을 끝맺을 때",
        phrases: [
          ["So, in short, ...", "그러니까 짧게 말하면, ..."],
          ["So for me, the main thing is ...", "그래서 저한테 제일 중요한 건 ..."],
          ["That's it from me. Thanks.", "제 얘기는 여기까지예요. 고마워요."],
          ["Thanks for sharing. I learned a lot.", "얘기해 줘서 고마워요. 많이 배웠어요."]
        ]
      }
    ]
  }
];

export type TopicGroup = "Tech" | "Life" | "Hobby";

export interface TopicMeta {
  slug: string;
  title: string;
  group: TopicGroup;
  desc: string;
  empty: string;
  tag: string;
}

export const TOPICS: TopicMeta[] = [
  // Tech
  {
    slug: "ai",
    title: "AI",
    group: "Tech",
    desc: "AI 도구와 모델 실험 기록",
    empty: "(´･ω･`) 곧 꺼내올게요",
    tag: "ai",
  },
  {
    slug: "quant",
    title: "Quant",
    group: "Tech",
    desc: "퀀트 투자와 데이터 분석",
    empty: "( ͡° ͜ʖ ͡°) 준비 중",
    tag: "quant",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding",
    group: "Tech",
    desc: "AI와 함께 빠르게 만든 것들",
    empty: "¯\\_(ツ)_/¯ 아직 없네요",
    tag: "vibe-coding",
  },

  // Life
  {
    slug: "english",
    title: "English",
    group: "Life",
    desc: "영어 공부하며 남기는 기록",
    empty: "(・_・ヾ 시작해볼게요",
    tag: "english",
  },
  {
    slug: "study",
    title: "Study",
    group: "Life",
    desc: "방통대 통계학 & 기타 공부 노트",
    empty: "ᕙ( •̀ ᗜ •́ )ᕗ 공부 중",
    tag: "study",
  },
  {
    slug: "thought",
    title: "Thought",
    group: "Life",
    desc: "잡생각과 짧은 에세이",
    empty: "(´-`) .｡oO 생각 중...",
    tag: "thought",
  },

  // Hobby
  {
    slug: "book",
    title: "Book",
    group: "Hobby",
    desc: "읽은 책과 인상 깊었던 구절",
    empty: "(｡◕‿‿◕｡) 책장 정리 중",
    tag: "book",
  },
  {
    slug: "exhibition",
    title: "Exhibition",
    group: "Hobby",
    desc: "다녀온 전시와 인상 깊은 작품",
    empty: "ヽ(°〇°)ﾉ 전시 보러 갈 예정",
    tag: "exhibition",
  },
  {
    slug: "sport",
    title: "Sport",
    group: "Hobby",
    desc: "수영, 달리기, 등산 이야기",
    empty: "ᕕ( ᐛ )ᕗ 달리는 중",
    tag: "sport",
  },
  {
    slug: "doodle",
    title: "Doodle",
    group: "Hobby",
    desc: "iPad로 끄적인 두들들",
    empty: "✎ 그리는 중...",
    tag: "doodle",
  },
];

export const getTopicBySlug = (slug: string) =>
  TOPICS.find(t => t.slug === slug);

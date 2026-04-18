export const SITE = {
  website: "https://xemotion.github.io/",
  author: "홍차 🫖 (HY)",
  profile: "https://github.com/xemotion",
  desc: "바이브 코딩, 과학책, 전시, 운동 — 홍차의 티타임 노트",
  title: "티타임 노트",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/xemotion/xemotion.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Seoul",
} as const;

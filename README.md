# 티타임 노트

xemotion(홍차)의 개인 블로그 — 바이브 코딩, 과학책, 전시, 운동에 대한 기록.

**Live**: https://xemotion.github.io

## Stack

- [Astro](https://astro.build/) + [Astro Paper](https://github.com/satnaing/astro-paper) template
- Pretendard 폰트
- GitHub Pages 배포 (GitHub Actions)

## Local Dev

```sh
npm install
npm run dev         # http://localhost:4321
npm run build
```

## 글 쓰기

1. `src/data/blog/_template.md` 복사
2. 카테고리 폴더에 저장 (예: `src/data/blog/tech/vibe-coding/my-post.md`)
3. `draft: true`로 작성 → 완성되면 `draft: false`
4. commit + push → 자동 배포

## 구조

```
src/data/blog/
├── tech/     (ai, quant, vibe-coding)
├── life/     (english, study, thought)
└── hobby/    (book, exhibition, sport, doodle)
```

## License

Theme: MIT (Astro Paper by [Sat Naing](https://github.com/satnaing/astro-paper))
Content: © HY

---
# ============================================
# 블로그 글 템플릿
# 이 파일은 _ 로 시작해서 사이트에 표시되지 않음
# 새 글 쓸 때: 이 파일 복사해서 이름 바꿔서 사용
# 예: cp _template.md my-first-post.md
# ============================================

title: "여기에 제목"
description: "검색엔진/공유링크에 뜨는 설명 (1-2문장)"
pubDatetime: 2026-04-18T10:00:00+09:00  # 발행일시 (한국 시간)
# modDatetime:                           # 수정시 기입 (선택)

# 태그: 여러 개 가능 (소문자, 하이픈 추천)
tags:
  - vibe-coding
  - study

# 상태
draft: true        # true: 로컬에서만 보임 / false: 배포됨
featured: false    # true: 홈 상단 "Featured" 섹션에 노출

# 선택 필드
# ogImage: "./cover.jpg"   # 썸네일 (같은 폴더에 이미지 두면 됨)
# author: "서혜영"          # 기본값은 config.ts의 SITE.author
# hideEditPost: true       # 에디트 링크 숨기기
---

<!-- 본문 시작 -->

간단한 도입 한두 문장. 이 글이 뭐에 관한 건지, 왜 썼는지.

## 목차 자동생성

Table of contents

## 첫 번째 섹션

본문 내용. **굵게**, _기울임_, ~~취소선~~ 다 됨.

- 리스트
- 항목
  - 중첩도 됨

### 하위 섹션

> 인용문은 이렇게. 인상 깊었던 문구나 핵심 포인트.

## 코드 블록

```python
# 언어 지정하면 문법 강조됨
def hello():
    print("Hello, world!")
```

```bash
# 터미널 명령어
npm run dev
```

## 이미지 넣기

![대체 텍스트](./image.jpg)

<!-- 또는 Figure 형태 (캡션 붙이기) -->
<figure>
  <img src="./image.jpg" alt="설명" />
  <figcaption class="text-center">
    캡션 텍스트
  </figcaption>
</figure>

## 링크

[텍스트](https://example.com) 혹은 자동 링크: <https://example.com>

## 표

| 항목 | 설명 |
|------|------|
| A    | 가   |
| B    | 나   |

## 구분선

---

## 마무리

- 오늘 배운 것 / 느낀 것 요약
- 다음에 더 파보고 싶은 것

# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의의 실습용 저장소입니다. Next.js 와 shadcn/ui 로 시작하는 작은 Todo 앱을 단계별로 발전시키며 Claude Code 사용법을 익힙니다.

## 프로젝트 개요

- 검색, 카테고리 필터, 정렬 기능을 갖춘 Todo 앱
- Server Components 우선 구조, 클라이언트 상태는 최소화
- 각 챕터가 Git 브랜치로 분리되어 있어 강의 진행 단계에 맞춰 코드를 따라갈 수 있음

주요 디렉토리:

```
app/         Next.js App Router 엔트리 (layout, page, 전역 스타일)
components/  Todo 관련 컴포넌트 + shadcn/ui 컴포넌트 (components/ui)
hooks/       useTodos 등 커스텀 훅
lib/         타입 정의, 유틸 함수
```

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- Vitest / Testing Library
- 패키지 매니저: bun 1.3.6

## 시작하기

### 요구사항

- [bun](https://bun.sh) 1.3.6 이상

### 설치 및 실행

```bash
bun install
bun dev
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000) 에서 열립니다.

자주 쓰는 스크립트:

```bash
bun dev            # 개발 서버 실행
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run format     # Prettier 포맷팅
bun run test       # Vitest 실행 (1회)
bun run test:watch # Vitest 실행 (watch 모드)
```

## 챕터별 시작 브랜치

각 레슨은 시작 시점의 코드 상태를 브랜치로 제공합니다. 레슨 본문에서 안내하는 브랜치로 전환한 뒤 따라가시면 됩니다.

```shell
git checkout ch02-03
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```

## Contributors

- 토이크레인 - Frontend Developer

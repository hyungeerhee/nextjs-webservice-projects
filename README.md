# 🍱 Next.js Fullstack Practice

Next.js 13을 기반으로 한 풀스택 웹서비스 학습 프로젝트입니다.  
문법 학습과 동시에 서버 기능, 인증, DB 연동, 배포 등 **실무에서 요구되는 기능들을 직접 구현**하며 프론트엔드와 백엔드 전반을 학습했습니다.

---

## 📌 프로젝트 개요

이 프로젝트는 2개의 소규모 웹 애플리케이션을 통해 Next.js의 핵심 기능을 실습하며, 다음과 같은 개발 역량을 키우는 것을 목표로 합니다.

- **프로젝트 1: 문법 학습용 그로서리 스토어**
  - React 및 Next.js 문법, 컴포넌트 구조, 상태 관리 기초 학습
- **프로젝트 2: 게시판 서비스**
  - 서버 기능, 데이터베이스 연동, 인증 처리 등 풀스택 기능 구현

---

## 🛠 기술 스택

| 분야         | 스택 |
|--------------|------|
| 프론트엔드   | React, Next.js 13 (App Router) |
| 상태 관리    | useState, useEffect |
| 백엔드       | Next.js API Route (서버 기능 내장) |
| 인증         | NextAuth.js |
| 데이터베이스 | MongoDB, Mongoose |
| 파일 업로드  | AWS S3 |
| 배포         | Vercel, AWS EC2 |
| 기타         | HTML, CSS, JavaScript (ES6+), Git, GitHub |

---

## 💡 주요 기능

- 🔐 회원가입 / 로그인 (NextAuth 기반)
- 📄 게시글 작성 / 수정 / 삭제 (MongoDB 연동)
- 🖼 이미지 업로드 (AWS S3)
- ⚙️ 서버 API 구성 (`/api` 경로)
- 🚀 서버사이드 렌더링 & 정적 라우팅
- 🛡 에러 처리, 캐싱, UX 최적화
- ☁️ 클라우드 배포 (Vercel 및 AWS)

---

## 🧠 학습 포인트

- App Router 구조 이해 및 적용
- `use client` / `use server` 디렉티브의 차이점과 활용
- MongoDB와 Next.js 서버 기능 연결 방식
- NextAuth를 통한 OAuth + 자가 인증 흐름 구현
- API 응답 처리 및 클라이언트 요청 설계 패턴
- S3 Presigned URL 기반 파일 업로드 처리
- Vercel 및 AWS를 통한 실제 서비스 배포

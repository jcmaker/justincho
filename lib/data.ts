import { type Language, locales } from "@/lib/locales";

export type Project = {
  slug: string;
  name: string;
  outcome: string;
  problem: string;
  users: string;
  keyDecision: string;
  result: string;
  demo: { live: string };
  role: string;
  github?: string;
  thumbnail?: string;
};

export const getProjects = (language: Language): Project[] => {
  const t = locales[language];
  const en = language === "en";

  return [
    {
      slug: "quest-on",
      name: "Quest-On",
      outcome: en
        ? "AI Interactive Exam Platform"
        : "AI 인터랙티브 시험 플랫폼",
      problem: t.highlights.questOn.problem,
      users: en
        ? "Professors and TAs running exams that require structured reasoning and fast, fair evaluation."
        : "추론형 서술 평가를 운영하고, 빠르고 공정한 채점이 필요한 교수/조교.",
      keyDecision: en
        ? "Why Next.js: ship SEO-friendly demos fast. Why Supabase: reliable Postgres + Auth/RLS for permissions."
        : "Why Next.js: SEO 친화적인 데모를 빠르게 배포하고, 제품처럼 보이는 UX를 만들기 위해\nWhy Supabase: 신뢰성 있는 Postgres + Auth/RLS로 권한/데이터를 빠르고 안전하게 구성하기 위해",
      result: en
        ? "Reduced grading workload by ~80% (10 hrs → 2 hrs) via automated scoring + rubric feedback."
        : "자동 채점 + 루브릭 피드백으로 채점 시간을 약 80% 절감 (10시간 → 2시간).",
      demo: { live: "https://quest-on.vercel.app" },
      role: en
        ? "Co-Founder, CTO & Lead Engineer (end-to-end)."
        : "공동창업자, CTO & 리드 엔지니어 (기획~개발~배포 E2E)",
    },
    {
      slug: "gtec-board",
      name: "GTEC Board",
      outcome: en ? "Real-time AI Issue Tracker" : "실시간 AI 이슈 트래커",
      problem: en
        ? "Product teams need a fast, keyboard-first issue tracker — with an AI agent that handles the busywork."
        : "제품 팀에는 빠르고 키보드 중심인 이슈 트래커, 그리고 잡무를 대신 처리하는 AI 에이전트가 필요합니다.",
      users: en
        ? "Product teams organizing work into teams, projects, and cycles."
        : "팀·프로젝트·사이클로 업무를 관리하는 제품 팀.",
      keyDecision: en
        ? "Why Convex: real-time multiplayer sync + live presence out of the box.\nWhy Clerk: org-scoped auth & billing.\nBuilt an org-scoped AI agent (Vercel AI SDK) that creates, searches, and summarizes strictly within a workspace."
        : "Why Convex: 실시간 협업 동기화와 라이브 프레즌스를 기본 제공\nWhy Clerk: 조직 단위 인증·결제\n워크스페이스 범위로 제한된 AI 에이전트(Vercel AI SDK)를 구축해 조직 내에서만 이슈 생성/검색/요약을 수행",
      result: en
        ? "Linear-style tracker: ⌘K command palette, drag-and-drop kanban, cycles, real-time sync, PWA, and a workspace-aware AI agent."
        : "Linear 스타일 트래커: ⌘K 커맨드 팔레트, 드래그앤드롭 칸반, 사이클, 실시간 동기화, PWA, 워크스페이스 인지형 AI 에이전트.",
      demo: { live: "" },
      role: en
        ? "Built end-to-end (full-stack + AI integration)."
        : "풀스택 + AI 통합 E2E 구축.",
      github: "https://github.com/jcmaker/GtecBoard",
    },
    {
      slug: "printer",
      name: "3D Printer Management System",
      outcome: en ? "Campus-wide Operations Tool" : "캠퍼스 운영 도구",
      problem: t.highlights.printer.problem,
      users: en
        ? "Students reserving printers and staff/professors managing availability, queues, and incidents."
        : "프린터를 예약하는 학생, 가용성·대기열·장애 이슈를 관리하는 조교/교수/운영자.",
      keyDecision: en
        ? "Built for real-time status visibility and operational accountability (monitoring + queue + dashboard)."
        : "실시간 상태 가시성과 운영 책임성을 확보하기 위해 모니터링 + 대기열 + 대시보드 중심으로 설계했습니다.",
      result: en
        ? "Used by ~400 students/semester; improved accountability and reduced “unknown usage” cases."
        : "학기당 약 400명 사용; 운영 책임성이 개선되고 “미기록 사용” 사례가 감소했습니다.",
      demo: { live: "" },
      role: en ? "Built end-to-end (full-stack)." : "풀스택으로 E2E 구축",
      github: "https://github.com/jcmaker/design3dprinter",
      thumbnail: "/3dprinter_shot.png",
    },
    {
      slug: "persona-engine",
      name: "Persona Engine",
      outcome: en
        ? "Dockerized AI Persona Engine"
        : "도커 기반 AI 페르소나 엔진",
      problem: en
        ? "Running an AI persona service means wiring a model backend, a database, and a 3D frontend into one reproducible stack."
        : "AI 페르소나 서비스를 운영하려면 모델 백엔드·DB·3D 프론트엔드를 하나의 재현 가능한 스택으로 묶어야 합니다.",
      users: en
        ? "Developers experimenting with AI persona generation and 3D-rendered interfaces."
        : "AI 페르소나 생성과 3D 인터페이스를 실험하는 개발자.",
      keyDecision: en
        ? "Why FastAPI + Postgres + Docker Compose: a reproducible, self-hostable backend.\nWhy React Three Fiber: render personas in interactive 3D directly in the browser."
        : "Why FastAPI + Postgres + Docker Compose: 재현 가능하고 셀프 호스팅 가능한 백엔드\nWhy React Three Fiber: 브라우저에서 페르소나를 인터랙티브 3D로 렌더링",
      result: en
        ? "Full containerized stack (FastAPI, Postgres, React/Three.js, nginx) that spins up with a single docker-compose up."
        : "단일 docker-compose로 구동되는 완전 컨테이너 스택(FastAPI, Postgres, React/Three.js, nginx).",
      demo: { live: "" },
      role: en
        ? "Built end-to-end (backend + 3D frontend + infra)."
        : "백엔드 + 3D 프론트 + 인프라 E2E 구축.",
      github: "https://github.com/jcmaker/persona-engine",
    },
    {
      slug: "esp-motor-control",
      name: "ESP8266 Motor Web Control",
      outcome: en ? "IoT Hardware Web Controller" : "IoT 하드웨어 웹 컨트롤러",
      problem: en
        ? "Controlling DC motors usually needs a wired setup; I wanted to drive them wirelessly from any browser."
        : "DC 모터 제어는 보통 유선 구성이 필요한데, 어떤 브라우저에서든 무선으로 제어하고 싶었습니다.",
      users: en
        ? "Makers and hardware tinkerers controlling motors over Wi-Fi."
        : "Wi-Fi로 모터를 제어하려는 메이커·하드웨어 개발자.",
      keyDecision: en
        ? "Why ESP8266 in AP mode + async web server: no router needed — the device hosts its own Wi-Fi and serves the control UI directly."
        : "Why ESP8266 AP 모드 + 비동기 웹서버: 공유기 없이 기기가 자체 Wi-Fi를 띄우고 제어 UI를 직접 서빙",
      result: en
        ? "Embedded firmware (C++) that serves a web UI to drive multiple DC motors via PWM in real time."
        : "여러 DC 모터를 PWM으로 실시간 제어하는 웹 UI를 서빙하는 임베디드 펌웨어(C++).",
      demo: { live: "" },
      role: en
        ? "Firmware + web control UI (solo)."
        : "펌웨어 + 웹 제어 UI 단독 개발.",
      github: "https://github.com/jcmaker/esp8266-ap-dc-motor-web-control",
    },
  ];
};

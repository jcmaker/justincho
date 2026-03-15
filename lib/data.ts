import { locales, type Language } from "@/lib/locales";

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
  // Future fields for detail page
  description?: string[]; 
  features?: string[];
  techStack?: string[];
  thumbnail?: string;
  images?: string[];
};

export const getProjects = (language: Language): Project[] => {
  const t = locales[language];
  
  const highlightLinks = {
    questOn: {
      live: "https://quest-on.vercel.app",
    },
    printer: {
      live: "",
    },
    youreview: {
      live: "https://youreview.me",
    },
    portfolio: {
      live: "",
    }
  } as const;

  return [
    {
      slug: "quest-on",
      name: "Quest-On",
      outcome:
        language === "en"
          ? "AI Interactive Exam Platform"
          : "AI 인터랙티브 시험 플랫폼",
      problem: t.highlights.questOn.problem,
      users:
        language === "en"
          ? "Professors and TAs running exams that require structured reasoning and fast, fair evaluation."
          : "추론형 서술 평가를 운영하고, 빠르고 공정한 채점이 필요한 교수/조교.",
      keyDecision:
        language === "en"
          ? "Why Next.js: ship SEO-friendly demos fast. Why Supabase: reliable Postgres + Auth/RLS for permissions."
          : "Why Next.js: SEO 친화적인 데모를 빠르게 배포하고, 제품처럼 보이는 UX를 만들기 위해\nWhy Supabase: 신뢰성 있는 Postgres + Auth/RLS로 권한/데이터를 빠르고 안전하게 구성하기 위해",
      result:
        language === "en"
          ? "Reduced grading workload by ~80% (10 hrs → 2 hrs) via automated scoring + rubric feedback."
          : "자동 채점 + 루브릭 피드백으로 채점 시간을 약 80% 절감 (10시간 → 2시간).",
      demo: highlightLinks.questOn,
      role:
        language === "en"
          ? "Co-Founder, CPO & Lead Engineer (end-to-end)."
          : "공동창업자, CPO & 리드 엔지니어 (기획~개발~배포 E2E)",
      thumbnail: "/project-thumbnails/quest-on.png", // Placeholder path
    },
    {
      slug: "printer",
      name: "3D Printer Management System",
      outcome:
        language === "en" ? "Campus-wide Operations Tool" : "캠퍼스 운영 도구",
      problem: t.highlights.printer.problem,
      users:
        language === "en"
          ? "Students reserving printers and staff/professors managing availability, queues, and incidents."
          : "프린터를 예약하는 학생, 가용성·대기열·장애 이슈를 관리하는 조교/교수/운영자.",
      keyDecision:
        language === "en"
          ? "Built for real-time status visibility and operational accountability (monitoring + queue + dashboard)."
          : "실시간 상태 가시성과 운영 책임성을 확보하기 위해 모니터링 + 대기열 + 대시보드 중심으로 설계했습니다.",
      result:
        language === "en"
          ? "Used by ~400 students/semester; improved accountability and reduced “unknown usage” cases."
          : "학기당 약 400명 사용; 운영 책임성이 개선되고 “미기록 사용” 사례가 감소했습니다.",
      demo: highlightLinks.printer,
      role:
        language === "en"
          ? "Built end-to-end (full-stack)."
          : "풀스택으로 E2E 구축",
      thumbnail: "/project-thumbnails/printer.png",
    },
    {
      slug: "youreview",
      name: "YouReview",
      outcome:
        language === "en" ? "Rank & Share Culture" : "문화 취향 랭킹 & 공유",
      problem: t.highlights.youreview.problem,
      users:
        language === "en"
          ? "People who want clean, public lists to organize tastes and share recommendations."
          : "취향을 깔끔하게 정리하고 공개 리스트로 추천을 공유하고 싶은 사람들.",
      keyDecision:
        language === "en"
          ? "Why Next.js: fast iteration + product-like UI/SEO for sharing. Why Tailwind: consistent UI at speed."
          : "Why Next.js: 공유/검색을 고려한 제품형 UI·SEO, 빠른 반복 개발을 위해\nWhy Tailwind: 빠른 속도에서도 UI 일관성을 유지하기 위해",
      result:
        language === "en"
          ? "Shipped a live, shareable ranking site at youreview.me with public links for instant evaluation."
          : "youreview.me에 공개 링크로 바로 평가 가능한 랭킹 사이트를 출시했습니다.",
      demo: highlightLinks.youreview,
      role:
        language === "en"
          ? "Solo developer (product + design + engineering)."
          : "단독 개발(기획·디자인·개발).",
      thumbnail: "/project-thumbnails/youreview.png",
    },
    {
      slug: "portfolio",
      name: "Portfolio Website",
      outcome:
        language === "en"
          ? "Modern, product-like personal site"
          : "제품처럼 보이는 포트폴리오",
      problem:
        language === "en"
          ? "Recruiters need a fast way to evaluate scope, decision-making, and proof via demos."
          : "채용 담당자가 데모를 통해 빠르게 범위/의사결정/증거를 평가할 수 있어야 합니다.",
      users:
        language === "en"
          ? "Hiring managers and engineers reviewing work quickly."
          : "빠르게 결과물을 확인하려는 채용 담당자/엔지니어.",
      keyDecision:
        language === "en"
          ? "Why Next.js: performance + SEO. Why Tailwind: rapid iteration with consistent UI."
          : "Why Next.js: 성능 + SEO\nWhy Tailwind: 일관성 있는 UI로 빠르게 반복 개선",
      result:
        language === "en"
          ? "Clear, demo-forward layout optimized for quick scanning and immediate evaluation."
          : "빠르게 스캔하고 즉시 평가할 수 있는 데모 중심 구조로 구성.",
      demo: highlightLinks.portfolio,
      role:
        language === "en"
          ? "Built and iterated independently."
          : "단독 제작 및 지속 개선",
      thumbnail: "/project-thumbnails/portfolio.png",
    },
  ];
};

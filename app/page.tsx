"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Award,
  Briefcase,
  Mail,
} from "lucide-react";
import {
  TypingText,
  TypingTextCursor,
} from "@/components/animate-ui/primitives/texts/typing";
import {
  Tilt,
  TiltContent,
} from "@/components/animate-ui/primitives/effects/tilt";
import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { LanguageToggle } from "@/components/i18n/language-toggle";
import { useLanguage } from "@/components/i18n/language-provider";
import { locales } from "@/lib/locales";

export default function Home() {
  const { language } = useLanguage();

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
  } as const;

  type Demo = { live: string };

  const projects = [
    {
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
      demo: highlightLinks.questOn satisfies Demo,
      role:
        language === "en"
          ? "Co-Founder, CPO & Lead Engineer (end-to-end)."
          : "공동창업자, CPO & 리드 엔지니어 (기획~개발~배포 E2E)",
    },
    {
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
      demo: highlightLinks.printer satisfies Demo,
      role:
        language === "en"
          ? "Built end-to-end (full-stack)."
          : "풀스택으로 E2E 구축",
    },
    {
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
      demo: highlightLinks.youreview satisfies Demo,
      role:
        language === "en"
          ? "Solo developer (product + design + engineering)."
          : "단독 개발(기획·디자인·개발).",
    },
    {
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
      demo: { live: "" },
      role:
        language === "en"
          ? "Built and iterated independently."
          : "단독 제작 및 지속 개선",
    },
  ] as const;

  const LiveLink = ({ live }: { live: string }) => {
    if (!live) return null;
    return (
      <a
        className="inline-flex items-center underline underline-offset-4 hover:text-foreground text-sm text-gray-300"
        href={live}
        target="_blank"
        rel="noreferrer"
      >
        {t.live}
      </a>
    );
  };

  return (
    <div className="min-h-screen py-6 md:py-12">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/profile.jpeg"
                alt="Justin Cho"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                <TypingText
                  text="Justin Cho"
                  delay={500}
                  inView={true}
                  duration={100}
                  loop={true}
                  holdDelay={5000}
                >
                  <TypingTextCursor />
                </TypingText>
              </h1>
              <p className="mt-1 text-base md:text-xl text-gray-400">
                {t.location}
              </p>
            </div>
          </div>

          <div className="text-gray-300 mt-4 mb-5 leading-relaxed text-pretty space-y-3">
            {t.about.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="text-gray-400 mb-4 md:mb-6">{t.hiring}</p>

          {/* touch-friendly social */}
          <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-4 md:mb-6">
            <Magnetic strength={0.5} range={120} asChild>
              <Link
                aria-label="GitHub"
                href="https://github.com/jcmaker"
                className="p-2.5 rounded-lg border border-white/10 text-foreground hover:bg-white/5 active:bg-white/10 transition"
              >
                <Github size={22} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.5} range={120} asChild>
              <Link
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/justin-cho-39850a1b0/"
                className="p-2.5 rounded-lg border border-white/10 text-foreground hover:bg-white/5 active:bg-white/10 transition"
              >
                <Linkedin size={22} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.5} range={120} asChild>
              <Link
                aria-label="Instagram"
                href="https://instagram.com/justinsta_627"
                className="p-2.5 rounded-lg border border-white/10 text-foreground hover:bg-white/5 active:bg-white/10 transition"
              >
                <Instagram size={22} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.5} range={120} asChild>
              <Link
                href="mailto:jcmaker0627@gmail.com"
                className="p-2.5 rounded-lg border border-white/10 text-foreground hover:bg-white/5 active:bg-white/10 transition"
              >
                <Mail size={22} />
              </Link>
            </Magnetic>
            <div className="ml-auto">
              <LanguageToggle />
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
            {t.sections.highlights}
          </h2>

          <div className="space-y-4 md:space-y-6">
            <Tilt maxTilt={10} perspective={800}>
              <TiltContent>
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                  <div className="relative h-40 md:h-56 bg-gradient-to-br from-white/10 to-white/0 p-6 flex items-end">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">
                        {t.highlights.questOn.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base mt-1">
                        {t.highlights.questOn.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 space-y-3">
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="text-gray-400">{t.labels.problem}</span>{" "}
                      {t.highlights.questOn.problem}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="text-gray-400">{t.labels.solution}</span>{" "}
                      {t.highlights.questOn.solution}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="text-gray-400">{t.labels.impact}</span>{" "}
                      {t.highlights.questOn.impact}
                    </p>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        {t.labels.demo}
                      </p>
                      <LiveLink live={highlightLinks.questOn.live} />
                    </div>
                  </div>
                </div>
              </TiltContent>
            </Tilt>

            <Tilt maxTilt={10} perspective={800}>
              <TiltContent>
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                  <div className="relative h-40 md:h-64 bg-white/5 p-2">
                    <Image
                      src="/3dprinter_shot.png"
                      alt="3D Printer Management System"
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 640px, 100vw"
                    />
                  </div>
                  <div className="p-5 md:p-6 space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {t.highlights.printer.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="text-gray-400">{t.labels.problem}</span>{" "}
                      {t.highlights.printer.problem}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="text-gray-400">{t.labels.solution}</span>{" "}
                      {t.highlights.printer.solution}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="text-gray-400">{t.labels.impact}</span>{" "}
                      {t.highlights.printer.impact}
                    </p>
                    {highlightLinks.printer.live ? (
                      <div>
                        <p className="text-gray-400 text-sm mb-2">
                          {t.labels.demo}
                        </p>
                        <LiveLink live={highlightLinks.printer.live} />
                      </div>
                    ) : null}
                  </div>
                </div>
              </TiltContent>
            </Tilt>

            <Tilt maxTilt={10} perspective={800}>
              <TiltContent>
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                  <div className="relative h-40 md:h-64 bg-white/5 p-2">
                    <Image
                      src="/youreview_shot.png"
                      alt="YouReview"
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 640px, 100vw"
                    />
                  </div>
                  <div className="p-5 md:p-6 space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {t.highlights.youreview.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="text-gray-400">{t.labels.problem}</span>{" "}
                      {t.highlights.youreview.problem}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="text-gray-400">{t.labels.solution}</span>{" "}
                      {t.highlights.youreview.solution}
                    </p>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        {t.labels.demo}
                      </p>
                      <LiveLink live={highlightLinks.youreview.live} />
                    </div>
                  </div>
                </div>
              </TiltContent>
            </Tilt>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
            {t.sections.projects}
          </h2>

          <div className="grid gap-4 md:gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-white/10 p-5 md:p-6 bg-white/0 hover:bg-white/5 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-lg md:text-xl">
                      {p.name} —{" "}
                      <span className="text-gray-300 font-medium">
                        {p.outcome}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm md:text-base">
                  <div className="text-gray-300">
                    <span className="text-gray-400">{t.labels.problem}</span>{" "}
                    {p.problem}
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-400">{t.labels.users}</span>{" "}
                    {p.users}
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-400">
                      {t.labels.keyDecision}
                    </span>{" "}
                    <span className="whitespace-pre-line">{p.keyDecision}</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-400">{t.labels.result}</span>{" "}
                    {p.result}
                  </div>
                  {p.demo.live ? (
                    <div className="text-gray-300">
                      <span className="text-gray-400">{t.labels.demo}</span>
                      <div className="mt-2">
                        <LiveLink live={p.demo.live} />
                      </div>
                    </div>
                  ) : null}
                  <div className="text-gray-300">
                    <span className="text-gray-400">{t.labels.myRole}</span>{" "}
                    {p.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <Briefcase size={22} className="md:size-6" />{" "}
            {t.sections.experience}
          </h2>

          <div className="space-y-4">
            <div className="py-2">
              <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-start">
                <div className="flex items-start gap-2 flex-1">
                  <Briefcase
                    size={16}
                    className="text-gray-400 mt-0.5 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="font-medium">
                      {t.experience.questOnTitle}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base mb-2">
                      {t.experience.questOnWhen}
                    </div>
                    <ul className="text-gray-300 text-sm md:text-base space-y-1.5 mt-2 list-disc list-inside">
                      {t.experience.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <Award size={22} className="md:size-6" /> {t.sections.awards}
          </h2>

          <div className="space-y-4">
            {t.awards.map((a) => (
              <div key={`${a.name}-${a.year}`} className="py-2">
                <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                  <div className="flex items-start gap-2">
                    <Award size={16} className="text-gray-400 mt-0.5" />
                    <span className="font-medium">{a.name}</span>
                  </div>
                  {a.year ? (
                    <span className="text-gray-400 text-sm ml-6 md:ml-0">
                      {a.year}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Code2,
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

export default function Home() {
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
                Software Engineer based in Seoul, South Korea
              </p>
            </div>
          </div>

          <p className="text-gray-300 mt-4 mb-5 leading-relaxed text-pretty">
            I build clean, useful tools that turn small daily frictions into
            flow. My sweet spot is Next.js + Supabase + Tailwind, and I move
            fast—I prototype with intent, design with taste, and ship demos
            people can evaluate immediately.
          </p>
          <p className="text-gray-400 mb-4 md:mb-6">
            If you are hiring, reach out via email!
          </p>

          {/* touch-friendly social */}
          <div className="flex gap-3 md:gap-6 mb-4 md:mb-6">
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
          </div>
        </section>

        {/* Highlights Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
            Highlights
          </h2>

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
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-1.5">
                    YouReview — Rank & Share Culture
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Rank and share your films, music, and books at{" "}
                    <a
                      className="underline underline-offset-4"
                      href="https://youreview.me"
                      target="_blank"
                      rel="noreferrer"
                    >
                      youreview.me
                    </a>
                    .
                  </p>
                </div>
              </div>
            </TiltContent>
          </Tilt>

          <Tilt maxTilt={10} perspective={800}>
            <TiltContent>
              <div className="mt-4 md:mt-6 rounded-2xl border border-white/10 overflow-hidden">
                <div className="relative h-40 md:h-64 bg-white/5 p-2">
                  <Image
                    src="/3dprinter_shot.png"
                    alt="3D Printer Management System"
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 640px, 100vw"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-1.5">
                    3D Printer Management System
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Built a campus-wide 3D printer status & reservation system
                    used by ~400 students per semester. Features real-time
                    monitoring, queue management, and professor dashboard for
                    issue tracking.
                  </p>
                </div>
              </div>
            </TiltContent>
          </Tilt>
        </section>

        {/* Projects Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
            Projects
          </h2>

          <div className="divide-y divide-[#333333]">
            {/* row */}
            <div className="py-3 md:py-4 md:hover:bg-white/5 md:hover:px-4 md:hover:-mx-4 md:hover:rounded transition">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <Link
                    href="https://github.com/jcmaker/my-portfolio"
                    className="underline text-foreground hover:text-[#888] font-medium inline-flex items-center gap-2"
                  >
                    Portfolio Website <ExternalLink size={14} />
                  </Link>
                  <p className="text-gray-400 text-sm mt-1">
                    Modern portfolio built with Next.js and Tailwind
                  </p>
                </div>
                <Link
                  href="#"
                  className="self-start md:self-auto inline-flex items-center gap-1 text-sm underline text-foreground hover:text-[#888]"
                >
                  <Code2 size={14} /> code
                </Link>
              </div>
            </div>

            <div className="py-3 md:py-4 md:hover:bg-white/5 md:hover:px-4 md:hover:-mx-4 md:hover:rounded transition">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="underline text-foreground hover:text-[#888] font-medium inline-flex items-center gap-2">
                    Quest-On
                  </span>
                  <p className="text-gray-400 text-sm mt-1">
                    AI Interactive Exam Platform
                  </p>
                </div>
                {/* <Link href="#" className="self-start md:self-auto inline-flex items-center gap-1 text-sm underline text-foreground hover:text-[#888]">
                  <Code2 size={14} /> code
                </Link> */}
              </div>
            </div>

            <div className="py-3 md:py-4 md:hover:bg-white/5 md:hover:px-4 md:hover:-mx-4 md:hover:rounded transition">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <Link
                    href="https://youreview.me"
                    className="underline text-foreground hover:text-[#888] font-medium inline-flex items-center gap-2"
                  >
                    YouReview
                    <ExternalLink size={14} />
                  </Link>
                  <p className="text-gray-400 text-sm mt-1">
                    Rank and share your films, music, and books
                  </p>
                </div>
                <Link
                  href="https://github.com/jcmaker/youreview"
                  className="self-start md:self-auto inline-flex items-center gap-1 text-sm underline text-foreground hover:text-[#888]"
                >
                  <Code2 size={14} />
                  code
                </Link>
              </div>
            </div>

            <div className="py-3 md:py-4 md:hover:bg-white/5 md:hover:px-4 md:hover:-mx-4 md:hover:rounded transition">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="underline text-foreground transition-colors duration-200 hover:text-[#888] font-medium flex items-center gap-2">
                    3D Printer Management System
                  </span>
                  <p className="text-gray-400 text-sm mt-1">
                    Campus-wide 3D printer status & reservation system
                  </p>
                </div>
                <Link
                  href="https://github.com/jcmaker/design3dprinter"
                  className="self-start md:self-auto inline-flex items-center gap-1 text-sm underline text-foreground hover:text-[#888]"
                >
                  <Code2 size={14} />
                  code
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <Briefcase size={22} className="md:size-6" /> Experience
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
                      Quest-On — Co-Founder, CPO & Lead Engineer
                    </div>
                    <div className="text-gray-400 text-sm md:text-base mb-2">
                      Seoul, Korea · Aug 2025 – Present
                    </div>
                    <ul className="text-gray-300 text-sm md:text-base space-y-1.5 mt-2 list-disc list-inside">
                      <li>
                        Built full-stack AI powered assessment platform
                        end-to-end (Next.js, Supabase, OpenAI), single-handedly
                        launching MVP in 3 months.
                      </li>
                      <li>
                        Designed 4-stage LLM interaction engine for real-time
                        reasoning evaluation.
                      </li>
                      <li>
                        Elicited interests to Co-develop with 4 professors; ran
                        2 live AI copilot exams with 20+ students without
                        outbreak of errors
                      </li>
                      <li>
                        Delivered ~80% reduction in grading workload via
                        automated scoring and rubric-based feedback (10 hrs → 2
                        hrs)
                      </li>
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
            <Award size={22} className="md:size-6" /> Awards
          </h2>

          <div className="space-y-4">
            <div className="py-2">
              <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                <div className="flex items-start gap-2">
                  <Award size={16} className="text-gray-400 mt-0.5" />
                  <span className="font-medium">
                    KoreaIT Academy — Web Service Development Competition 1st
                    Place
                  </span>
                </div>
                <span className="text-gray-400 text-sm ml-6 md:ml-0">2025</span>
              </div>
            </div>
            <div className="py-2">
              <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                <div className="flex items-start gap-2">
                  <Award size={16} className="text-gray-400 mt-0.5" />
                  <span className="font-medium">
                    SNAAC (Seoul National University Accelerator) — Advanced to
                    Final Round (Pre–Demo Day)
                  </span>
                </div>
                <span className="text-gray-400 text-sm ml-6 md:ml-0">2025</span>
              </div>
            </div>
            <div className="py-2">
              <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                <div className="flex items-start gap-2">
                  <Award size={16} className="text-gray-400 mt-0.5" />
                  <span className="font-medium">
                    Startup Express (Korea University) — Advanced to Final Round
                    (Pre–Demo Day)
                  </span>
                </div>
                <span className="text-gray-400 text-sm ml-6 md:ml-0">2025</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

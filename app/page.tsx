"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import {
  TypingText,
  TypingTextCursor,
} from "@/components/animate-ui/primitives/texts/typing";
import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { LanguageToggle } from "@/components/i18n/language-toggle";
import { useLanguage } from "@/components/i18n/language-provider";
import { locales } from "@/lib/locales";
import { getProjects } from "@/lib/data";

export default function Home() {
  const { language } = useLanguage();
  const router = useRouter();

  const t = locales[language];
  const projects = getProjects(language);

  const navItems = [
    { num: "01", label: t.sections.projects, id: "projects" },
    { num: "02", label: t.sections.experience, id: "experience" },
    { num: "03", label: t.sections.awards, id: "awards" },
    { num: "04", label: t.sections.skills, id: "skills" },
  ];

  return (
    <div className="min-h-screen">
      <div className="lg:flex lg:min-h-screen">
        {/* Left sidebar — sticky on desktop */}
        <aside className="lg:w-[40%] lg:max-w-[480px] lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between px-6 md:px-10 lg:px-12 py-10 lg:py-16">
          <div>
            {/* Profile */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-5">
              <Image
                src="/profile.jpeg"
                alt="Justin Cho"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
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

            {/* Location */}
            <p className="mt-2 text-base md:text-lg text-gray-400">
              {t.location}
            </p>

            {/* Bio */}
            <div className="text-gray-400 mt-6 leading-relaxed text-pretty space-y-3 text-sm md:text-base">
              {t.about.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {/* Hiring */}
            <p className="text-gray-400 mt-4 text-sm md:text-base">{t.hiring}</p>

            {/* Section navigation */}
            <nav className="mt-10 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-xs text-gray-500">{item.num}</span>
                  <span className="w-8 h-px bg-gray-600 group-hover:w-12 group-hover:bg-gray-300 transition-all" />
                  <span className="text-xs tracking-[0.2em] uppercase text-gray-500 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Spacer — pushes socials to bottom on desktop */}
          <div className="flex-grow" />

          {/* Social links + language toggle */}
          <div className="mt-10 lg:mt-0 space-y-4">
            <div className="w-full h-px bg-white/[0.06]" />
            <div className="flex items-center gap-4">
              <Magnetic strength={0.4} range={80} asChild>
                <Link
                  href="https://github.com/jcmaker"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <Github size={18} />
                </Link>
              </Magnetic>
              <Magnetic strength={0.4} range={80} asChild>
                <Link
                  href="https://www.linkedin.com/in/justin-cho-39850a1b0/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </Link>
              </Magnetic>
              <Magnetic strength={0.4} range={80} asChild>
                <Link
                  href="https://instagram.com/justinsta_627"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <Instagram size={18} />
                </Link>
              </Magnetic>
              <Magnetic strength={0.4} range={80} asChild>
                <Link
                  href="mailto:jcmaker0627@gmail.com"
                  aria-label="Email"
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <Mail size={18} />
                </Link>
              </Magnetic>

              <div className="w-px h-4 bg-white/[0.1]" />

              <LanguageToggle />
            </div>
          </div>
        </aside>

        {/* Right content — scrollable */}
        <main className="flex-1 px-6 md:px-10 lg:px-12 py-10 lg:py-16">
          {/* Projects */}
          <section id="projects" className="mb-16 scroll-mt-16">
            <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
              —— {t.sections.projects}
            </h2>

            <div className="grid gap-5">
              {projects.map((p) => (
                <div
                  key={p.name}
                  onClick={() => router.push(`/projects/${p.slug}`)}
                  className="group rounded-2xl border border-white/10 p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.07] transition cursor-pointer"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-3">
                    {p.outcome}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">
                    <Link href={`/projects/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <p className="mt-3 text-gray-400 line-clamp-2 leading-relaxed">
                    {p.problem}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-16 scroll-mt-16">
            <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
              —— {t.sections.experience}
            </h2>

            <div>
              <div className="font-medium text-lg">
                {t.experience.questOnTitle}
              </div>
              <div className="text-gray-400 text-sm mb-3">
                {t.experience.questOnWhen}
              </div>
              <ul className="text-gray-300 text-sm md:text-base space-y-2 mt-2">
                {t.experience.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-gray-600 flex-shrink-0 select-none">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Awards */}
          <section id="awards" className="mb-16 scroll-mt-16">
            <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
              —— {t.sections.awards}
            </h2>

            <div className="space-y-4">
              {t.awards.map((a) => (
                <div
                  key={`${a.name}-${a.year}`}
                  className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center py-2"
                >
                  <span className="font-medium">{a.name}</span>
                  {a.year ? (
                    <span className="text-gray-400 text-sm flex-shrink-0">
                      {a.year}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-16 scroll-mt-16">
            <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
              —— {t.sections.skills}
            </h2>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                "Next.js",
                "TypeScript",
                "React Router",
                "Supabase",
                "FastAPI",
                "Python",
                "TailwindCSS",
                "React",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm md:text-base hover:bg-white/10 hover:border-white/20 transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

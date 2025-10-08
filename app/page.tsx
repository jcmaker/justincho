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
  Calendar,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/profile.jpeg"
                alt="Justin Cho"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">Justin Cho</h1>
              <p className="text-xl text-gray-400">
                Software Engineer based in Seoul, South Korea
              </p>
            </div>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed mt-4">
            I build clean, useful tools that turn small daily frictions into
            flow. My sweet spot is Next.js + Supabase + Tailwind, and I move
            fast—I prototype with intent, design with taste, and ship demos
            people can evaluate immediately. On campus, I built a 3D-printer
            status & reservation system used by ~400 students per semester,
            letting students check remaining print time and enabling professors
            to monitor issues in real time.
          </p>
          <p className="text-gray-400 mb-6">
            If you are hiring, reach out via email!
          </p>

          <div className="flex gap-6 mb-6">
            <Link
              href="https://github.com/jcmaker"
              className="link flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/justin-cho-39850a1b0/"
              className="link flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com/justinsta_627"
              className="link flex items-center gap-2"
            >
              <Instagram size={16} />
              Instagram
            </Link>
          </div>

          <Link
            href="mailto:jcmaker0627@gmail.com"
            className="link text-gray-400 flex items-center gap-2 hover:text-gray-200 transition-colors"
          >
            <Mail size={16} />
            jcmaker0627@gmail.com
          </Link>
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Highlights</h2>

          {/* youreview.me */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative h-48 md:h-64">
              <Image
                src="/youreview_shot.png"
                alt="YouReview"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 640px, 100vw"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                YouReview — Rank & Share Culture
              </h3>
              <p className="text-gray-400">
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

          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative h-48 md:h-64">
              <Image
                src="/3dprinter_shot.png"
                alt="3D Printer Management System"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 640px, 100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                3D Printer Management System
              </h3>
              <p className="text-gray-400">
                Built a campus-wide 3D printer status & reservation system used
                by ~400 students per semester. Features real-time monitoring,
                queue management, and professor dashboard for issue tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>

          <div className="space-y-0">
            <div className="project-item">
              <div>
                <Link
                  href="https://github.com/jcmaker/my-portfolio"
                  className="link font-medium flex items-center gap-2"
                >
                  Portfolio Website
                  <ExternalLink size={14} />
                </Link>
                <p className="text-gray-400 text-sm mt-1">
                  Modern portfolio built with Next.js and Tailwind
                </p>
              </div>
              <Link href="#" className="link text-sm flex items-center gap-1">
                <Code2 size={14} />
                code
              </Link>
            </div>

            <div className="project-item">
              <div>
                <span className="link font-medium flex items-center gap-2">
                  Quest-On
                </span>
                <p className="text-gray-400 text-sm mt-1">
                  AI Interactive Exam Platform
                </p>
              </div>
              {/* <Link href="#" className="link text-sm flex items-center gap-1">
                <Code2 size={14} />
                code
              </Link> */}
            </div>

            <div className="project-item">
              <div>
                <Link
                  href="https://youreview.me"
                  className="link font-medium flex items-center gap-2"
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
                className="link text-sm flex items-center gap-1"
              >
                <Code2 size={14} />
                code
              </Link>
            </div>

            <div className="project-item">
              <div>
                <span className="link font-medium flex items-center gap-2">
                  3D Printer Management System
                </span>
                <p className="text-gray-400 text-sm mt-1">
                  Campus-wide 3D printer status & reservation system
                </p>
              </div>
              <Link
                href="https://github.com/jcmaker/design3dprinter"
                className="link text-sm flex items-center gap-1"
              >
                <Code2 size={14} />
                code
              </Link>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Briefcase size={24} />
            Experience
          </h2>

          <div className="space-y-4">
            <div className="experience-item">
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-gray-400" />
                <div>
                  <span className="font-medium">CTO, Full-Stack Developer</span>
                  <span className="text-gray-400"> — Startup Quest-On</span>
                </div>
              </div>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                <Calendar size={14} />
                Aug. 2025 - Present
              </span>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award size={24} />
            Awards
          </h2>

          <div className="space-y-4">
            <div className="experience-item">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-gray-400" />
                <span className="font-medium">
                  SNAAC (SNU) — Round 2 Advanced
                </span>
              </div>
              <span className="text-gray-400 text-sm">2025</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { getProjects } from "@/lib/data";
import { locales } from "@/lib/locales";

export default function ProjectDetail() {
  const params = useParams();
  const { language } = useLanguage();
  const t = locales[language];
  
  const slug = params?.slug as string;
  const project = getProjects(language).find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen py-6 md:py-12">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-foreground transition mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.outcome}</p>
          
          <div className="flex flex-wrap gap-4">
             {project.demo.live && (
              <a
                href={project.demo.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition"
              >
                <Globe size={18} />
                {t.live} Demo
              </a>
            )}
          </div>
        </header>

        {project.thumbnail && (
          <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
             <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">{t.labels.problem}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t.labels.keyDecision}</h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                {project.keyDecision}
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-400">{t.labels.users}</h3>
              <p className="text-gray-300">{project.users}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-400">{t.labels.myRole}</h3>
              <p className="text-gray-300">{project.role}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t.labels.result}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.result}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

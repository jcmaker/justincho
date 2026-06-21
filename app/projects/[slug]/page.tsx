import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects } from "@/lib/data";
import ProjectDetail from "./project-detail";

// Slugs are language-independent, so "en" is used purely to enumerate them.
export function generateStaticParams() {
  return getProjects("en").map((p) => ({ slug: p.slug }));
}

// SEO metadata is generated server-side, so it defaults to English copy
// (the visible UI still switches language client-side).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects("en").find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found — Justin Cho" };
  }

  const title = `${project.name} — Justin Cho`;
  const description = `${project.outcome}. ${project.problem}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: project.thumbnail ? [{ url: project.thumbnail }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.thumbnail ? [project.thumbnail] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = getProjects("en").some((p) => p.slug === slug);

  if (!exists) {
    notFound();
  }

  return <ProjectDetail slug={slug} />;
}

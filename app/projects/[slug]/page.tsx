import { notFound } from "next/navigation";
import { getProjects } from "@/lib/data";
import ProjectDetail from "./project-detail";

// Slugs are language-independent, so "en" is used purely to enumerate them.
export function generateStaticParams() {
  return getProjects("en").map((p) => ({ slug: p.slug }));
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

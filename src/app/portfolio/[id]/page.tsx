import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/portfolio/ProjectDetails";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;

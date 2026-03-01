import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { HiArrowUpRight, HiCodeBracket, HiClock } from "react-icons/hi2";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "default" | "glass";
}

const ProjectCard = ({ project, variant = "default" }: ProjectCardProps) => {
  const isGlass = variant === "glass";
  
  return (
    <Link href={`/portfolio/${project.id}`}>
      <div className={`project-card group relative rounded-3xl overflow-hidden transition-all duration-700 cursor-pointer h-full flex flex-col ${
        isGlass
          ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/20"
          : "bg-white shadow-sm hover:shadow-2xl"
      }`}>
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary-300 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm shadow-lg ${
            isGlass
              ? "bg-secondary/20 text-black border border-white/30"
              : "bg-white/95 text-secondary border border-gray-100"
          }`}>
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary/95 backdrop-blur-sm text-black shadow-lg">
              Featured
            </span>
          )}
        </div>

        <div className="relative aspect-16/10 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className={`flex items-center gap-2 text-sm font-medium ${
              isGlass ? "text-white" : "text-white"
            }`}>
              <HiClock className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex gap-2">
              {project.liveUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.liveUrl, '_blank');
                  }}
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="View live demo"
                >
                  <HiArrowUpRight className="w-4 h-4 text-gray-900" />
                </button>
              )}
              {project.githubUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.githubUrl, '_blank');
                  }}
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="View source code"
                >
                  <HiCodeBracket className="w-4 h-4 text-gray-900" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className={`text-xl font-bold group-hover:text-primary transition-colors duration-300 flex-1 ${
              isGlass ? "text-white" : "text-gray-900"
            }`}>
              {project.title}
            </h3>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shrink-0 ${
              isGlass ? "bg-white/10" : "bg-gray-50"
            }`}>
              <HiArrowUpRight className={`w-4 h-4 group-hover:text-black group-hover:rotate-45 transition-transform duration-300 ${
                isGlass ? "text-white" : "text-gray-600"
              }`} />
            </div>
          </div>

          <p className={`text-xs font-medium mb-3 ${
            isGlass ? "text-white/60" : "text-gray-400"
          }`}>{project.role}</p>
          
          <p className={`text-sm leading-relaxed mb-4 line-clamp-2 flex-1 ${
            isGlass ? "text-white/80" : "text-gray-500"
          }`}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  isGlass
                    ? "bg-white/10 text-white/90 border border-white/20 group-hover:bg-white/20 group-hover:border-primary/30"
                    : "bg-gray-50 text-gray-600 border border-gray-100 group-hover:border-primary/30 group-hover:text-primary"
                }`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
                isGlass
                  ? "bg-white/10 text-white/60 border border-white/20"
                  : "bg-gray-50 text-gray-400 border border-gray-100"
              }`}>
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary-300 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
      </div>
    </Link>
  );
};

export default ProjectCard;

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full">
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={`Ảnh chụp màn hình dự án ${title}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-text mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <div className="mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-primary/10 text-primary text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-3 items-center">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover font-medium py-2 px-4 rounded-md border border-primary hover:bg-primary/5 transition-colors duration-300 flex items-center space-x-2 text-sm"
            >
              <ExternalLink size={16} />
              <span>Xem Live</span>
            </Link>
          )}
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-text font-medium py-2 px-4 rounded-md border border-secondary hover:bg-secondary/5 transition-colors duration-300 flex items-center space-x-2 text-sm"
            >
              <Github size={16} />
              <span>Mã Nguồn</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

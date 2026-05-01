import Image from "next/image";
import { anton } from "@/app/fonts";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  year: number;
  imageUrl: string;
  alt: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  year,
  imageUrl,
  alt,
}: ProjectCardProps) {
  return (
    <div>
      <Image
        src={imageUrl}
        alt={alt}
        width={577}
        height={400}
        className="max-w-full"
      />
      <h3 className={`${anton.className} leading-[1.1]`}>{title}</h3>
      <p className="leading-normal text-(--color-secondary)">{description}</p>

      <span className="text-(--color-muted-text)">{year}</span>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="py-0.5 px-3 border border-(--color-secondary) rounded-[5px] text-(--color-secondary)"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

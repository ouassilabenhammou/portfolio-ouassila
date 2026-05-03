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
    <div className="group relative mx-auto min-w-0 max-w-full w-fit">
      <Image
        src={imageUrl}
        alt={alt}
        width={577}
        height={400}
        className="max-w-full rounded-[10px] md:rounded-[20px]"
      />

      <div className="pointer-events-none absolute left-1/2 bottom-[15px] w-[550px] max-w-[calc(100%-30px)] h-[153px] -translate-x-1/2 rounded-[10px] bg-(--color-background) opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
        <div className="flex h-full w-full flex-col px-5 py-4">
          <h3
            className={`${anton.className} max-w-full wrap-break-word leading-[1.1] uppercase text-[20px] md:text-[24px] text-(--color-primary)`}
          >
            {title}
          </h3>
          <p className="max-w-full wrap-break-word leading-[1.2] md:leading-normal text-(--color-secondary) text-[16px] md:text-[18px]">
            {description}
          </p>

          <span className="mt-2 text-(--color-muted-text)">{year}</span>
          <div className="mt-2 flex flex-wrap gap-2 min-w-0">
            {tags.map((tag) => (
              <span
                key={tag}
                className="py-0.5 px-3 border border-(--color-secondary) rounded-[5px] text-(--color-secondary) text-[14px] md:text-[16px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

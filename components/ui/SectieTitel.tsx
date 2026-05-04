import { anton } from "@/app/fonts";

/** Alleen `::before` viewportbreed; sectie blijft `w-full`. Per sectie: `before:bg-(--color-…)`. */
export const sectionFullBleedBackground = [
  "relative isolate w-full min-w-0",
  "before:pointer-events-none before:absolute before:inset-y-0 before:left-1/2 before:-z-10",
  "before:-ml-[50vw] before:w-[100vw] before:max-w-[100vw]",
].join(" ");

type SectieTitelProps = {
  title: string;
  subtitle: string;
};

export default function SectieTitel({ title, subtitle }: SectieTitelProps) {
  return (
    <div className="min-w-0 max-w-full flex flex-col items-center text-center gap-4">
      <h2
        className={`${anton.className} max-w-full md:max-w-[660px] text-[50px] md:text-[80px] leading-[1.1] wrap-break-word uppercase`}
      >
        {title}
      </h2>
      <p className="max-w-full text-[16px] md:text-[18px] leading-normal wrap-break-word text-(--color-muted-text)">
        {subtitle}
      </p>
    </div>
  );
}

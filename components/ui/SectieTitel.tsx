import { anton } from "@/app/fonts";

type SectieTitelProps = {
  title: string;
  subtitle: string;
};

export default function SectieTitel({ title, subtitle }: SectieTitelProps) {
  return (
    <div className="min-w-0 max-w-full">
      <h2
        className={`${anton.className} max-w-full text-[50px] md:text-[80px] leading-[1.1] wrap-break-word uppercase`}
      >
        {title}
      </h2>
      <p className="max-w-full text-[16px] md:text-[18px] leading-normal wrap-break-word text-(--color-muted-text)">
        {subtitle}
      </p>
    </div>
  );
}

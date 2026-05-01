import { anton } from "@/app/fonts";

type SectieTitelProps = {
  title: string;
  subtitle: string;
};

export default function SectieTitel({ title, subtitle }: SectieTitelProps) {
  return (
    <div>
      <h2 className={`${anton.className} text-[80px] leading-[1.1] `}>
        {title}
      </h2>
      <p className="text-[18px] leading-normal text-(--color-muted-text)">
        {subtitle}
      </p>
    </div>
  );
}

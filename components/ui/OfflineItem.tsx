import Image from "next/image";
import { anton } from "@/app/fonts";
type Props = {
  title: string;
  image: string;
};

export default function OfflineItem({ title, image }: Props) {
  return (
    <div className="min-w-0 max-w-full">
      <h1
        className={`${anton.className} max-w-full text-[80px] wrap-break-word text-(--color-secondary)`}
      >
        {title}
      </h1>

      <Image src={image} alt={title} width={250} height={250} />
    </div>
  );
}

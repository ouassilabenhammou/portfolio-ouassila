import Image from "next/image";
import { anton } from "@/app/fonts";
type Props = {
  title: string;
  image: string;
};

export default function OfflineItem({ title, image }: Props) {
  return (
    <div>
      <h1 className={`${anton.className} text-[80px] text-(--color-secondary)`}>
        {title}
      </h1>

      <Image src={image} alt={title} width={250} height={250} />
    </div>
  );
}

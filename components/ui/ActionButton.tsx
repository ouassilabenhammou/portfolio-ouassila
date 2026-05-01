"use client";

type ActionButtonProps = {
  imageSrc?: string;
};

export default function ActionButton({ imageSrc }: ActionButtonProps) {
  return (
    <div>
      <img src={imageSrc} alt="" />
    </div>
  );
}

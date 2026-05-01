import type { ComponentType, SVGProps } from "react";

type ActionButtonProps = {
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName?: string;
};

export default function ActionButton({ Icon, iconClassName }: ActionButtonProps) {
  return (
    <div>
      {Icon ? (
        <Icon aria-hidden focusable="false" className={iconClassName} />
      ) : null}
    </div>
  );
}

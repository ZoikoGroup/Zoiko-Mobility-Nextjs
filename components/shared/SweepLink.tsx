import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type SweepLinkProps = {
  href: string;
  children: ReactNode;
  /** Base classes: border, base bg/text color, padding, rounding, sizing. */
  className?: string;
  /** Background color of the fill that sweeps in on hover. */
  fillClassName?: string;
  /** Text color class(es) applied once the fill has swept in. */
  hoverTextClassName?: string;
};

export default function SweepLink({
  href,
  children,
  className,
  fillClassName = "bg-white",
  hoverTextClassName,
}: SweepLinkProps) {
  return (
    <Link href={href} className={clsx("group relative inline-flex overflow-hidden", className)}>
      <span
        aria-hidden
        className={clsx(
          "absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100",
          fillClassName
        )}
      />
      <span
        className={clsx(
          "relative z-10 flex w-full items-center justify-center gap-2 transition-colors duration-300",
          hoverTextClassName
        )}
      >
        {children}
      </span>
    </Link>
  );
}

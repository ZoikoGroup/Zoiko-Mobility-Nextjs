import clsx from "clsx";
import { ReactNode } from "react";
import SweepLink from "./SweepLink";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-dark";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <SweepLink
      href={href}
      className={clsx(
        "items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold",
        variant === "primary" && "border-brand-orange bg-brand-orange text-white",
        variant === "outline" && "border-white bg-transparent text-white",
        variant === "outline-dark" && "border-brand-purple-dark bg-white text-brand-purple-dark",
        className
      )}
      fillClassName={variant === "outline-dark" ? "bg-brand-purple-dark" : "bg-white"}
      hoverTextClassName={clsx(
        variant === "primary" && "group-hover:text-brand-orange",
        variant === "outline" && "group-hover:text-brand-purple-dark",
        variant === "outline-dark" && "group-hover:text-white"
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </SweepLink>
  );
}

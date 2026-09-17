import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { MenuIcon, MenuIconName } from "@/components/layout/menus/icons";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-purple-dark sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-gray-600">{description}</p>}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  linkLabel,
  linkHref,
  variant = "light",
}: {
  icon: MenuIconName;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={clsx(
        "flex h-full flex-col gap-3 rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-lg",
        variant === "light" && "border-gray-100 bg-white",
        variant === "dark" && "border-white/10 bg-brand-purple-dark"
      )}
    >
      <span
        className={clsx(
          "inline-flex h-11 w-11 items-center justify-center rounded-xl",
          variant === "light" && "bg-brand-orange/10 text-brand-orange",
          variant === "dark" && "bg-brand-orange/15 text-brand-orange"
        )}
      >
        <MenuIcon name={icon} className="h-5 w-5" />
      </span>

      <h3 className={clsx("text-base font-semibold", variant === "light" && "text-brand-purple-dark", variant === "dark" && "text-white")}>
        {title}
      </h3>
      <p className={clsx("flex-1 text-sm", variant === "light" && "text-gray-600", variant === "dark" && "text-white/60")}>
        {description}
      </p>

      <Link
        href={linkHref}
        className="group/link flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
      >
        {linkLabel}
        <span aria-hidden className="transition-transform duration-150 group-hover/link:translate-x-0.5">
          →
        </span>
      </Link>
    </div>
  );
}

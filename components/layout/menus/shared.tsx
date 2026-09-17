import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { MenuIcon, MenuIconName } from "./icons";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-orange">{children}</p>;
}

export function MenuHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={clsx("mt-1 text-xl font-bold leading-snug text-brand-purple-dark", className)}>{children}</h3>
  );
}

export function IconBadge({
  icon,
  tone = "purple",
  shape = "square",
}: {
  icon: MenuIconName;
  tone?: "purple" | "orange";
  shape?: "square" | "circle";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center border",
        shape === "square" ? "h-14 w-14 rounded-2xl" : "h-10 w-10 rounded-full",
        tone === "purple" && "border-brand-purple/20 bg-brand-purple/5 text-brand-purple-dark",
        tone === "orange" && "border-brand-orange/20 bg-brand-orange/10 text-brand-orange"
      )}
    >
      <MenuIcon name={icon} className={shape === "square" ? "h-7 w-7" : "h-5 w-5"} />
    </span>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link flex items-center gap-1.5 text-sm text-gray-700 transition-colors hover:text-brand-purple"
    >
      {children}
      <span aria-hidden className="transition-transform duration-150 group-hover/link:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export function ChevronLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link flex items-center justify-between text-sm text-gray-600 transition-colors hover:text-brand-purple"
    >
      {children}
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5 shrink-0 text-gray-300 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:text-brand-orange"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 0 1-.02-1.06L10.94 10 7.19 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06L8.27 14.8a.75.75 0 0 1-1.06-.02Z"
          clipRule="evenodd"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
}

export function MenuColumn({
  icon,
  tone,
  title,
  subtitle,
  children,
}: {
  icon: MenuIconName;
  tone?: "purple" | "orange";
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <IconBadge icon={icon} tone={tone} shape="circle" />
      <div>
        <p className="text-sm font-semibold text-brand-purple-dark">{title}</p>
        {subtitle && <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>}
      </div>
      <div className="flex flex-col gap-2 border-t border-gray-100 pt-3">{children}</div>
    </div>
  );
}

export function PromoCard({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaVariant = "orange",
  caption,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "orange" | "blue" | "white";
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-purple-dark via-brand-purple to-brand-purple-dark p-6 text-white",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-orange/20 blur-2xl"
      />
      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-orange">{eyebrow}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>

      <div className="relative mt-6">
        <Link
          href={ctaHref}
          className={clsx(
            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            ctaVariant === "orange" && "bg-brand-orange text-white hover:bg-brand-orange-dark",
            ctaVariant === "blue" && "bg-blue-600 text-white hover:bg-blue-700",
            ctaVariant === "white" && "bg-white text-brand-purple-dark hover:bg-white/90"
          )}
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
        {caption && <p className="mt-4 text-xs text-white/50">{caption}</p>}
      </div>
    </div>
  );
}

export function StatCard({
  eyebrow,
  title,
  stats,
  className,
}: {
  eyebrow: string;
  title: string;
  stats: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-purple via-brand-purple-dark to-black p-6 text-white",
        className
      )}
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-orange">{eyebrow}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug">{title}</h3>
      </div>
      <div className="mt-6 flex items-end gap-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-[11px] text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BottomBar({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col flex-wrap gap-3 border-t border-gray-100 bg-gray-50/60 p-4 sm:flex-row sm:items-center sm:gap-10">
      {children}
    </div>
  );
}

export function BottomAction({
  icon,
  tone = "orange",
  title,
  description,
  href,
}: {
  icon: MenuIconName;
  tone?: "purple" | "orange";
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group/action flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-white"
    >
      <IconBadge icon={icon} tone={tone} shape="circle" />
      <span>
        <span className="block text-sm font-semibold text-brand-purple-dark">{title}</span>
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          {description}
          <span
            aria-hidden
            className="text-gray-300 transition-transform duration-150 group-hover/action:translate-x-0.5 group-hover/action:text-brand-orange"
          >
            →
          </span>
        </span>
      </span>
    </Link>
  );
}

export function MenuPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}

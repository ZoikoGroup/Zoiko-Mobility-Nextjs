import { ReactNode } from "react";
import Image from "next/image";
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
  size = "lg",
}: {
  icon: MenuIconName;
  tone?: "purple" | "orange";
  shape?: "square" | "circle";
  size?: "sm" | "lg";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center border",
        shape === "square"
          ? clsx(
              size === "lg" ? "h-[95px] w-[95px] rounded-2xl" : "h-11 w-11 rounded-xl",
              "border-[#3B2667] bg-transparent text-brand-purple-dark"
            )
          : clsx(
              "h-10 w-10 rounded-full",
              tone === "purple" && "border-brand-purple/20 bg-brand-purple/5 text-brand-purple-dark",
              tone === "orange" && "border-brand-orange/20 bg-brand-orange/10 text-brand-orange"
            )
      )}
    >
      <MenuIcon
        name={icon}
        className={shape === "square" ? (size === "lg" ? "h-10 w-10" : "h-5 w-5") : "h-5 w-5"}
      />
    </span>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link flex pb-5 items-center gap-1.5 font-menu-item text-[14.55px] font-normal leading-none tracking-normal text-gray-700 transition-colors hover:text-brand-purple"
    >
      {children}
      <span aria-hidden className="text-[#3B2667] transition-transform duration-150 group-hover/link:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export function ChevronLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link flex items-center justify-between font-menu-item text-[11px] font-normal leading-none tracking-normal text-gray-600 transition-colors hover:text-brand-purple"
    >
      {children}
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5 shrink-0 text-[#3B2667] transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:text-brand-orange"
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
        <p className="text-[12px] font-semibold text-brand-purple-dark">{title}</p>
        {subtitle && <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>}
      </div>
      <div className="flex flex-col gap-5 border-t border-gray-100 pt-3">{children}</div>
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
  image,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "orange" | "blue" | "white";
  caption?: string;
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 text-white",
        !image && "bg-gradient-to-br from-brand-purple-dark via-brand-purple to-brand-purple-dark",
        className
      )}
    >
      {image ? (
        <>
          <Image src={image} alt="" fill sizes="220px" className="object-cover" priority={false} />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-purple-dark via-brand-purple-dark/70 to-brand-purple-dark/30"
          />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-orange/20 blur-2xl"
        />
      )}
      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-orange">{eyebrow}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>

      <div className="relative mt-6">
        <Link
          href={ctaHref}
          className={clsx(
            "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors",
            ctaVariant === "orange" && "bg-brand-orange text-white hover:bg-brand-orange-dark",
            ctaVariant === "blue" && "bg-[#2B7BE4] text-white hover:bg-[#2568c4]",
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
  image,
  className,
}: {
  eyebrow: string;
  title: string;
  stats: { value: string; label: string }[];
  image?: string;
  className?: string;
}) {
  if (image) {
    return (
      <div
        className={clsx(
          "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 text-white",
          className
        )}
      >
        <Image src={image} alt="" fill sizes="220px" className="object-cover" priority={false} />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-purple-dark via-brand-purple-dark/60 to-brand-purple-dark/20"
        />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-orange">{eyebrow}</p>
          <h3 className="mt-2 text-lg font-bold leading-snug">{title}</h3>
        </div>
        <div className="relative mt-6 grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[12px] font-bold leading-tight">{stat.value}</p>
              <p className="mt-0.5 text-[10px] leading-tight text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
      <div className="mt-6 grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-lg font-bold leading-tight">{stat.value}</p>
            <p className="mt-0.5 text-[10px] leading-tight text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BottomBar({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-gray-100 border-t border-gray-100 bg-gray-50/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
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
      className="group/action flex w-full items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-white"
    >
      <span className="flex items-center gap-3">
        <IconBadge icon={icon} tone={tone} shape="circle" />
        <span>
          <span className="block text-sm font-semibold text-brand-purple-dark">{title}</span>
          <span className="block text-xs text-gray-500">{description}</span>
        </span>
      </span>
      <span
        aria-hidden
        className="text-[#3B2667] transition-transform duration-150 group-hover/action:translate-x-0.5 group-hover/action:text-brand-orange"
      >
        →
      </span>
    </Link>
  );
}

export function MenuPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}

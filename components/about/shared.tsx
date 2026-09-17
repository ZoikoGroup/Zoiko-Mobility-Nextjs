import { ReactNode } from "react";
import clsx from "clsx";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={clsx("text-xs font-semibold uppercase tracking-wider text-brand-orange", className)}>
      {children}
    </p>
  );
}

export function ListRow({
  title,
  description,
  last,
}: {
  title: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-2 py-5 sm:grid-cols-[240px_1fr] sm:gap-8",
        !last && "border-b border-gray-100"
      )}
    >
      <h3 className="text-sm font-semibold text-brand-purple-dark">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export function NumberedItem({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="text-lg font-bold text-brand-orange">{number}</span>
      <div>
        <h3 className="text-sm font-semibold text-brand-purple-dark">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}

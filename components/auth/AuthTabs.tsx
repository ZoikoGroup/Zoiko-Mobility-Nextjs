import Link from "next/link";
import clsx from "clsx";

const tabs = [
  { key: "login", label: "Login", href: "/sign-in" },
  { key: "register", label: "Register", href: "/register" },
  { key: "reset", label: "Reset Password", href: "/reset-password" },
] as const;

export type AuthTabKey = (typeof tabs)[number]["key"];

export default function AuthTabs({ active }: { active: AuthTabKey }) {
  return (
    <nav aria-label="Account" className="flex w-full items-stretch justify-center px-4">
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Link
            key={tab.key}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={clsx(
              "relative flex min-h-10 flex-1 items-center justify-center whitespace-nowrap px-3 pb-3.5 pt-4 text-center font-plex text-base transition-colors",
              isActive ? "font-semibold text-auth-orange" : "font-medium text-auth-ink hover:text-auth-orange"
            )}
          >
            {tab.key === "reset" && (
              <span aria-hidden className="absolute left-0 top-4 h-5 w-px bg-auth-border" />
            )}
            {tab.label}
            {isActive && (
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] rounded-xs bg-auth-orange" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

import Link from "next/link";
import { Fragment } from "react";

const links = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Help", href: "/help" },
];

export default function AuthFooter() {
  return (
    <footer className="flex w-full flex-wrap items-center justify-between gap-x-9 gap-y-2 px-[5px] pt-4 font-plex text-xs">
      <nav aria-label="Legal" className="flex items-center gap-0.5">
        {links.map((link, index) => (
          <Fragment key={link.href}>
            {index > 0 && (
              <span aria-hidden className="px-2 text-auth-dot">
                •
              </span>
            )}
            <Link href={link.href} className="px-[1.67px] py-[3.33px] text-auth-link hover:text-auth-orange">
              {link.label}
            </Link>
          </Fragment>
        ))}
      </nav>
      <p className="text-auth-link">© 2026 Zoiko Tech Inc.</p>
    </footer>
  );
}

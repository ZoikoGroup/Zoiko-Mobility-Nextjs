"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Logo, Button } from "@/components/shared";
import { primaryNav } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";
import { CompanyMenu, OurBrandsMenu, PartnersMenu, SafetyTrustMenu, SimpleMenu, WhatWeDoMenu } from "./menus";

function NavDropdown({ label }: { label: string }) {
  switch (label) {
    case "Our Brands":
      return <OurBrandsMenu />;
    case "What We Do":
      return <WhatWeDoMenu />;
    case "Safety & Trust":
      return <SafetyTrustMenu />;
    case "Partners":
      return <PartnersMenu />;
    case "Company":
      return <CompanyMenu />;
    default: {
      const group = primaryNav.find((item) => item.label === label);
      return group ? <SimpleMenu group={group} /> : null;
    }
  }
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <Container className="relative flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {primaryNav.map((group) => {
            const hasDropdown = group.label !== "Newsroom";

            return (
              <div key={group.label} className="group">
                <Link
                  href={group.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-brand-purple"
                >
                  {group.label}
                  {hasDropdown && (
                    <svg
                      aria-hidden
                      viewBox="0 0 20 20"
                      className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.24 4.38a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </Link>

                {hasDropdown && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <NavDropdown label={group.label} />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/partner-with-us">Partner with us</Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 lg:hidden"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

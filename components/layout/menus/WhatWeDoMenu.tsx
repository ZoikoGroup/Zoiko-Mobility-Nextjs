import Link from "next/link";
import { ArrowLink, Eyebrow, IconBadge, MenuHeading, MenuPanel } from "./shared";
import type { MenuIconName } from "./icons";

const columns: {
  icon: MenuIconName;
  label: string;
  links: { label: string; href: string }[];
}[] = [
  {
    icon: "layers",
    label: "Mobility Technology",
    links: [
      { label: "Mobility Technology", href: "/what-we-do/mobility-technology" },
      { label: "Partner Ecosystem", href: "/what-we-do/partner-ecosystem" },
    ],
  },
  {
    icon: "people",
    label: "People & Platforms",
    links: [
      { label: "Ride Platforms", href: "/what-we-do/ride-platforms" },
      { label: "Driver Technology", href: "/what-we-do/driver-technology" },
    ],
  },
  {
    icon: "building",
    label: "Organizations & Places",
    links: [
      { label: "Business Mobility", href: "/what-we-do/business-mobility" },
      { label: "Cities & Communities", href: "/what-we-do/cities-and-communities" },
    ],
  },
];

export default function WhatWeDoMenu() {
  return (
    <MenuPanel className="w-full">
      <div className="p-6">
        <Eyebrow>What We Do</Eyebrow>
        <MenuHeading>Technology and infrastructure for connected mobility.</MenuHeading>

        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.label} className="flex flex-col gap-3">
              <IconBadge icon={column.icon} tone="purple" shape="square" />
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{column.label}</p>
              <div className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <ArrowLink key={link.href} href={link.href}>
                    {link.label}
                  </ArrowLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/what-we-do"
        className="flex items-center justify-center gap-2 rounded-b-2xl bg-brand-orange py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
      >
        Explore What We Do
        <span aria-hidden>→</span>
      </Link>
    </MenuPanel>
  );
}

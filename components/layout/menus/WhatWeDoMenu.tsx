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
    <MenuPanel className="w-[850px] max-w-[100vw]">
      <div className="p-8">
        <Eyebrow>What We Do</Eyebrow>
        <MenuHeading>Technology and infrastructure for connected mobility.</MenuHeading>

        <div className="mt-6 grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {columns.map((column) => (
            <div
              key={column.label}
              className="flex flex-col gap-3 py-6 first:pt-0 last:pb-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
            >
              <IconBadge icon={column.icon} tone="purple" shape="square" />
              <p className="text-[11px] font-semibold pb-3 uppercase tracking-wider text-gray-400">{column.label}</p>
              <div className="flex flex-col gap-7">
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

      <div className="border-t border-gray-100 p-6">
        <Link
          href="/what-we-do"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-orange py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
        >
          Explore What We Do
          <span aria-hidden>→</span>
        </Link>
      </div>
    </MenuPanel>
  );
}

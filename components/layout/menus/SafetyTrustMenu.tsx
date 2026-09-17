import { ArrowLink, Eyebrow, IconBadge, MenuHeading, MenuPanel } from "./shared";
import type { MenuIconName } from "./icons";

const pillars: {
  icon: MenuIconName;
  title: string;
  description: string;
  href: string;
  wide?: boolean;
}[] = [
  {
    icon: "shield",
    title: "Safety",
    description: "Safer experiences through thoughtful design and operational excellence.",
    href: "/safety-and-trust/safety",
  },
  {
    icon: "lock",
    title: "Privacy",
    description: "Respecting and protecting people's information.",
    href: "/safety-and-trust/privacy",
  },
  {
    icon: "shield",
    title: "Security",
    description: "Protecting our platforms, people and partners.",
    href: "/safety-and-trust/security",
  },
  {
    icon: "accessibility",
    title: "Accessibility",
    description: "More inclusive mobility for more people.",
    href: "/safety-and-trust/accessibility",
  },
  {
    icon: "leaf",
    title: "Responsible Technology",
    description: "Advancing innovation responsibly for a better, more sustainable tomorrow.",
    href: "/safety-and-trust/responsible-technology",
    wide: true,
  },
];

const policyLinks = [
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Accessibility statement", href: "/safety-and-trust/accessibility" },
  { label: "Security contact", href: "/safety-and-trust/security" },
];

export default function SafetyTrustMenu() {
  return (
    <MenuPanel className="w-[820px] max-w-[92vw]">
      <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-[1fr_260px]">
        <div>
          <Eyebrow>Safety & Trust</Eyebrow>
          <MenuHeading>Trust must be designed into every mobility experience.</MenuHeading>
          <p className="mt-2 max-w-xl text-sm text-gray-600">
            We build safer, more inclusive and more trusted mobility through responsible innovation, strong
            protections, and a people-first approach.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <ArrowCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:border-l lg:border-gray-100 lg:pl-8">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Policy & Disclosures</p>
          <div className="flex flex-col gap-3">
            {policyLinks.map((link) => (
              <ArrowLink key={link.href} href={link.href}>
                {link.label}
              </ArrowLink>
            ))}
          </div>
          <div className="mt-2 border-t border-gray-100 pt-4">
            <a
              href="/safety-and-trust"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              Explore Safety & Trust
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </MenuPanel>
  );
}

function ArrowCard({
  icon,
  title,
  description,
  href,
  wide,
}: {
  icon: MenuIconName;
  title: string;
  description: string;
  href: string;
  wide?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group/card flex h-[112px] items-start gap-3 rounded-xl border border-gray-100 p-4 transition-shadow hover:shadow-md ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <IconBadge icon={icon} tone="purple" shape="square" size="sm" />
      <span className="flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="font-menu-item text-[13.78px] font-bold leading-none tracking-normal text-[#0F1B33]">
            {title}
          </span>
          <span
            aria-hidden
            className="text-gray-300 transition-transform duration-150 group-hover/card:translate-x-0.5 group-hover/card:text-brand-orange"
          >
            →
          </span>
        </span>
        <span className="mt-1.5 block font-menu-item text-[11.87px] font-normal leading-[1.15] tracking-normal text-[#5A6B7C]">
          {description}
        </span>
      </span>
    </a>
  );
}

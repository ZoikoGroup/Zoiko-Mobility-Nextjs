import { BottomAction, BottomBar, ChevronLink, MenuColumn, MenuPanel, PromoCard } from "./shared";
import type { MenuIconName } from "./icons";

const columns: {
  icon: MenuIconName;
  tone: "purple" | "orange";
  title: string;
  subtitle: string;
  links: { label: string; href: string }[];
}[] = [
  {
    icon: "building",
    tone: "purple",
    title: "About Zoiko Mobility",
    subtitle: "Who we are and what drives us",
    links: [
      { label: "Our story", href: "/company/our-story" },
      { label: "Our purpose", href: "/company/our-purpose" },
      { label: "Our values", href: "/company/our-values" },
      { label: "Our leadership", href: "/company/leadership" },
      { label: "Our global presence", href: "/company/global-presence" },
      { label: "Why Zoiko Mobility", href: "/company/why-zoiko-mobility" },
      { label: "Fact sheet", href: "/company/fact-sheet" },
    ],
  },
  {
    icon: "landmark",
    tone: "orange",
    title: "Leadership & Governance",
    subtitle: "Experienced. Accountable. Future-ready.",
    links: [
      { label: "Executive leadership", href: "/company/leadership/executive" },
      { label: "Board of directors", href: "/company/leadership/board-of-directors" },
      { label: "Governance framework", href: "/company/leadership/governance-framework" },
      { label: "Ethics & compliance", href: "/company/leadership/ethics-and-compliance" },
      { label: "Policies & standards", href: "/company/leadership/policies-and-standards" },
      { label: "Risk management", href: "/company/leadership/risk-management" },
      { label: "Corporate disclosures", href: "/company/leadership/corporate-disclosures" },
    ],
  },
  {
    icon: "people",
    tone: "purple",
    title: "Careers",
    subtitle: "Build what moves the world",
    links: [
      { label: "Life at Zoiko Mobility", href: "/careers/life-at-zoiko-mobility" },
      { label: "Open positions", href: "/careers/open-positions" },
      { label: "Students & graduates", href: "/careers/students-and-graduates" },
      { label: "Diversity, equity & inclusion", href: "/careers/diversity-equity-inclusion" },
      { label: "Benefits & wellbeing", href: "/careers/benefits-and-wellbeing" },
      { label: "Interview process", href: "/careers/interview-process" },
      { label: "Career stories", href: "/careers/career-stories" },
    ],
  },
  {
    icon: "leaf",
    tone: "orange",
    title: "Sustainability & Impact",
    subtitle: "Mobility for a better tomorrow",
    links: [
      { label: "Our approach", href: "/company/sustainability/approach" },
      { label: "Environmental impact", href: "/company/sustainability/environmental-impact" },
      { label: "Social impact", href: "/company/sustainability/social-impact" },
      { label: "Community programs", href: "/company/sustainability/community-programs" },
      { label: "Responsible innovation", href: "/company/sustainability/responsible-innovation" },
      { label: "Sustainability reports", href: "/company/sustainability/reports" },
      { label: "Goals & progress", href: "/company/sustainability/goals-and-progress" },
    ],
  },
  {
    icon: "document",
    tone: "purple",
    title: "Investor Relations",
    subtitle: "Information for our investors",
    links: [
      { label: "Financial overview", href: "/company/investors/financial-overview" },
      { label: "Investor presentations", href: "/company/investors/presentations" },
      { label: "Earnings & reports", href: "/company/investors/earnings-and-reports" },
      { label: "Stock information", href: "/company/investors/stock-information" },
      { label: "Corporate governance", href: "/company/investors/corporate-governance" },
      { label: "Regulatory filings", href: "/company/investors/regulatory-filings" },
      { label: "Shareholder services", href: "/company/investors/shareholder-services" },
    ],
  },
];

export default function CompanyMenu() {
  return (
    <MenuPanel className="w-full">
      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[220px_1fr_220px]">
        <PromoCard
          eyebrow="Our Company"
          title="People. Mobility. A Brighter Tomorrow."
          description="Driving progress through technology, partnership and purpose."
          ctaLabel="About Zoiko Mobility"
          ctaHref="/company/about"
          ctaVariant="white"
          caption="Mobility for people. Opportunity for communities."
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((column) => (
            <MenuColumn key={column.title} icon={column.icon} tone={column.tone} title={column.title} subtitle={column.subtitle}>
              {column.links.map((link) => (
                <ChevronLink key={link.href} href={link.href}>
                  {link.label}
                </ChevronLink>
              ))}
            </MenuColumn>
          ))}
        </div>

        <PromoCard
          eyebrow="A brighter tomorrow"
          title="A more connected, inclusive and sustainable world."
          description="Learn how we're shaping the future of mobility."
          ctaLabel="Our impact"
          ctaHref="/company/sustainability"
          ctaVariant="white"
        />
      </div>

      <BottomBar>
        <BottomAction
          icon="people"
          tone="orange"
          title="Join Our Team"
          description="Be part of a global movement"
          href="/careers"
        />
        <BottomAction
          icon="mail"
          tone="purple"
          title="Get Company Updates"
          description="News, insights and announcements"
          href="/newsroom"
        />
      </BottomBar>
    </MenuPanel>
  );
}

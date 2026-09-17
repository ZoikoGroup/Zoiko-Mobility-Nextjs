import Link from "next/link";
import { BottomAction, BottomBar, ChevronLink, MenuColumn, MenuPanel, PromoCard, StatCard } from "./shared";
import type { MenuIconName } from "./icons";

const columns: {
  icon: MenuIconName;
  tone: "purple" | "orange";
  title: string;
  subtitle: string;
  links: { label: string; href: string }[];
}[] = [
  {
    icon: "briefcase",
    tone: "purple",
    title: "Business Partnerships",
    subtitle: "Grow with Zoiko Mobility",
    links: [
      { label: "Corporate partnerships", href: "/partners/business/corporate-partnerships" },
      { label: "Mobility solutions", href: "/partners/business/mobility-solutions" },
      { label: "Fleet & operations", href: "/partners/business/fleet-and-operations" },
      { label: "Integration partners", href: "/partners/business/integration-partners" },
      { label: "Reseller programs", href: "/partners/business/reseller-programs" },
      { label: "Technology partners", href: "/partners/business/technology-partners" },
      { label: "Case studies", href: "/partners/business/case-studies" },
    ],
  },
  {
    icon: "steering-wheel",
    tone: "orange",
    title: "Driver Partners",
    subtitle: "Empowering driver success",
    links: [
      { label: "Driver recruitment", href: "/partners/drivers/recruitment" },
      { label: "Fleet partners", href: "/partners/drivers/fleet-partners" },
      { label: "Earnings opportunities", href: "/partners/drivers/earnings-opportunities" },
      { label: "Incentive programs", href: "/partners/drivers/incentive-programs" },
      { label: "Driver tools & resources", href: "/partners/drivers/tools-and-resources" },
      { label: "Training & support", href: "/partners/drivers/training-and-support" },
    ],
  },
  {
    icon: "landmark",
    tone: "purple",
    title: "Community & Government",
    subtitle: "Building stronger cities",
    links: [
      { label: "Public sector partnerships", href: "/partners/community/public-sector-partnerships" },
      { label: "Urban mobility projects", href: "/partners/community/urban-mobility-projects" },
      { label: "Sustainability initiatives", href: "/partners/community/sustainability-initiatives" },
      { label: "Community programs", href: "/partners/community/community-programs" },
      { label: "Research collaborations", href: "/partners/community/research-collaborations" },
      { label: "Grants & funding", href: "/partners/community/grants-and-funding" },
    ],
  },
  {
    icon: "code",
    tone: "orange",
    title: "Developers & Technology",
    subtitle: "Build the future of mobility",
    links: [
      { label: "Developer portal", href: "/partners/developers/portal" },
      { label: "APIs & integrations", href: "/partners/developers/apis-and-integrations" },
      { label: "Solution partners", href: "/partners/developers/solution-partners" },
      { label: "Innovation programs", href: "/partners/developers/innovation-programs" },
      { label: "Technical collaborations", href: "/partners/developers/technical-collaborations" },
      { label: "Sandbox environment", href: "/partners/developers/sandbox-environment" },
    ],
  },
  {
    icon: "megaphone",
    tone: "purple",
    title: "Media & Affiliates",
    subtitle: "Amplify what's next",
    links: [
      { label: "Media partnerships", href: "/partners/media/partnerships" },
      { label: "Affiliate program", href: "/partners/media/affiliate-program" },
      { label: "Brand assets", href: "/partners/media/brand-assets" },
      { label: "Event collaborations", href: "/partners/media/event-collaborations" },
      { label: "Sponsorships", href: "/partners/media/sponsorships" },
      { label: "Contact our team", href: "/partners/media/contact" },
    ],
  },
];

export default function PartnersMenu() {
  return (
    <MenuPanel className="w-[1400px] max-w-[92vw]">
      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[220px_1fr_220px]">
        <PromoCard
          eyebrow="Partner with Zoiko Mobility"
          title="Greater mobility. Stronger together."
          description="We collaborate with businesses, governments and communities to build smarter, safer and more inclusive cities."
          ctaLabel="Become a partner"
          ctaHref="/partners/become-a-partner"
          ctaVariant="blue"
          caption="Ideas today. A more connected tomorrow."
          image="/images/menu/partners-promo.png"
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

        <div className="flex h-full flex-col gap-2">
          <StatCard
            className="flex-1"
            eyebrow="Partnerships that move the world"
            title="Together we build smarter, safer and more inclusive cities."
            stats={[
              { value: "100+", label: "Strategic partners" },
              { value: "50+", label: "Cities worldwide" },
              { value: "1 shared", label: "brighter tomorrow" },
            ]}
            image="/images/menu/partners-stats.png"
          />
          <Link
            href="/partners"
            aria-label="Explore partners"
            className="group/arrow flex shrink-0 justify-end pr-1"
          >
            <span
              aria-hidden
              className="text-[#3B2667] transition-transform duration-150 group-hover/arrow:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      <BottomBar>
        <BottomAction
          icon="handshake"
          tone="orange"
          title="Partnership enquiries"
          description="Talk to our partnerships team"
          href="/partners/enquiries"
        />
        <BottomAction
          icon="document"
          tone="purple"
          title="Partner resources"
          description="Brochures, guides and brand assets"
          href="/partners/resources"
        />
      </BottomBar>
    </MenuPanel>
  );
}

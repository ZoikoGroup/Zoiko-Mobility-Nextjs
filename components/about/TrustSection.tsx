import Link from "next/link";
import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow } from "./shared";
import { MenuIcon } from "@/components/layout/menus/icons";
import type { MenuIconName } from "@/components/layout/menus/icons";

const pillars: { icon: MenuIconName; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Safety",
    description:
      "Mobility products should incorporate appropriate identity, incident, support and operational processes. Specific controls and statistics are published only when implemented and verified.",
  },
  {
    icon: "lock",
    title: "Privacy",
    description: "Personal information should be collected for defined purposes and handled proportionately, transparently and securely.",
  },
  {
    icon: "shield",
    title: "Security",
    description: "Accounts, identities, transactions, integrations and mobility systems require appropriate technical and organizational protection.",
  },
  {
    icon: "accessibility",
    title: "Accessibility",
    description:
      "Accessibility should influence product design from the beginning. Digital experiences target WCAG 2.2 AA, with stronger internal interaction standards where practical.",
  },
  {
    icon: "leaf",
    title: "Responsible technology",
    description: "Automation should improve operations without removing accountability. Where decisions materially affect people, appropriate evidence, review and human governance should exist.",
  },
];

export default function TrustSection() {
  return (
    <AnimatedSection className="bg-brand-purple-dark py-16 text-white sm:py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Trust by design</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Movement depends on trust.</h2>

        <div className="mt-8 flex flex-col gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-brand-orange">
                <MenuIcon name={pillar.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
                <p className="mt-1 text-sm text-white/60">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/safety-and-trust"
          className="group/link mt-8 flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-white"
        >
          Explore Safety & Trust
          <span aria-hidden className="transition-transform duration-150 group-hover/link:translate-x-0.5">
            →
          </span>
        </Link>
      </Container>
    </AnimatedSection>
  );
}

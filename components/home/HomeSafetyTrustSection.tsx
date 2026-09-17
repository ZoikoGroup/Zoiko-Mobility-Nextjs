import Link from "next/link";
import { AnimatedSection, Container } from "@/components/shared";
import { MenuIcon } from "@/components/layout/menus/icons";
import type { MenuIconName } from "@/components/layout/menus/icons";

const pillars: { icon: MenuIconName; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Safety",
    description: "Safety principles designed into the mobility experience from the start.",
  },
  {
    icon: "lock",
    title: "Privacy",
    description: "Data minimization and privacy-by-design across every product surface.",
  },
  {
    icon: "shield",
    title: "Security",
    description: "Protection for accounts, systems and the platforms people depend on.",
  },
  {
    icon: "accessibility",
    title: "Accessibility",
    description: "Inclusive design principles applied across the mobility experience.",
  },
  {
    icon: "leaf",
    title: "Responsible technology",
    description: "Human oversight and accountability guide how technology is built.",
  },
];

export default function HomeSafetyTrustSection() {
  return (
    <AnimatedSection className="bg-brand-purple-dark py-16 text-white sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">Safety & Trust</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Mobility depends on trust.</h2>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Safety, privacy, security, accessibility and responsible technology must be designed into the mobility
            experience — not added after it.
          </p>
          <Link
            href="/safety-and-trust"
            className="group/link mt-4 flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-white"
          >
            Explore Safety & Trust
            <span aria-hidden className="transition-transform duration-150 group-hover/link:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-5">
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
      </Container>
    </AnimatedSection>
  );
}

import { AnimatedSection, Container } from "@/components/shared";
import { FeatureCard } from "./shared";
import type { MenuIconName } from "@/components/layout/menus/icons";

const items: { icon: MenuIconName; title: string; description: string; linkLabel: string; linkHref: string }[] = [
  {
    icon: "person",
    title: "Riders",
    description: "Technology for clearer, more dependable journeys.",
    linkLabel: "Ride Platforms",
    linkHref: "/what-we-do/ride-platforms",
  },
  {
    icon: "steering-wheel",
    title: "Drivers",
    description: "Technology designed around driver participation and the realities of providing mobility services.",
    linkLabel: "Driver Technology",
    linkHref: "/what-we-do/driver-technology",
  },
  {
    icon: "briefcase",
    title: "Businesses & Partners",
    description: "Infrastructure for organizations, fleets and mobility partners.",
    linkLabel: "Business Mobility",
    linkHref: "/what-we-do/business-mobility",
  },
  {
    icon: "building",
    title: "Cities & Communities",
    description: "Adaptable technology for different local transportation and regulatory requirements.",
    linkLabel: "Cities & Communities",
    linkHref: "/what-we-do/cities-and-communities",
  },
];

export default function EcosystemSection() {
  return (
    <AnimatedSection className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <h2 className="max-w-xl text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
          Connecting the mobility ecosystem.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

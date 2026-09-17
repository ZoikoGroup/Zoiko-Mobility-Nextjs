import { AnimatedSection, Container } from "@/components/shared";
import { FeatureCard, SectionHeading } from "./shared";
import type { MenuIconName } from "@/components/layout/menus/icons";

const items: { icon: MenuIconName; title: string; description: string; linkLabel: string; linkHref: string }[] = [
  {
    icon: "truck",
    title: "Fleet & transportation partners",
    description: "Connect fleets and transportation providers with the Zoiko Mobility ecosystem.",
    linkLabel: "Learn more",
    linkHref: "/partners/fleet-and-transportation",
  },
  {
    icon: "briefcase",
    title: "Business mobility",
    description: "Mobility infrastructure for organizations and their teams.",
    linkLabel: "Learn more",
    linkHref: "/business-and-public-sector/business-mobility",
  },
  {
    icon: "plane",
    title: "Airports & travel",
    description: "Mobility technology for travel-hub and airport environments.",
    linkLabel: "Learn more",
    linkHref: "/business-and-public-sector/airports-and-travel",
  },
  {
    icon: "building",
    title: "Cities & public sector",
    description: "Technology built around local requirements and communities.",
    linkLabel: "Learn more",
    linkHref: "/business-and-public-sector/cities-and-public-sector",
  },
];

export default function WorkWithUsSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Work with us"
          title="Mobility works better when the ecosystem works together."
          className="max-w-xl"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

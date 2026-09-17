import { AnimatedSection, Container } from "@/components/shared";
import { FeatureCard, SectionHeading } from "./shared";
import type { MenuIconName } from "@/components/layout/menus/icons";

const items: { icon: MenuIconName; title: string; description: string; linkLabel: string; linkHref: string }[] = [
  {
    icon: "person",
    title: "I need a ride",
    description: "Get where you're going with Zoiko Rides.",
    linkLabel: "Zoiko Rides",
    linkHref: "/brands/zoiko-rides",
  },
  {
    icon: "steering-wheel",
    title: "I want to drive",
    description: "Join the driver-focused platform with DriverXtra.",
    linkLabel: "DriverXtra",
    linkHref: "/brands/driverxtra",
  },
  {
    icon: "people",
    title: "I want to work with Zoiko Mobility",
    description: "Explore fleet, business, city and technology partnerships.",
    linkLabel: "Partnerships",
    linkHref: "/partners",
  },
];

export default function NextStepsSection() {
  return (
    <AnimatedSection className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <SectionHeading align="center" title="Where do you want to go next?" className="mx-auto" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} variant="dark" {...item} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

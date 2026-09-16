import { Container, AnimatedSection } from "@/components/shared";
import { SectionHeading } from "./shared";

const features = [
  {
    title: "Ride Platforms",
    description: "Consumer-facing ride experiences built for reliability at scale.",
  },
  {
    title: "Driver Technology",
    description: "Tools that help drivers earn more and work safely.",
  },
  {
    title: "Business Mobility",
    description: "Mobility programs for airports, cities, and public sector partners.",
  },
  {
    title: "Partner Ecosystem",
    description: "APIs and integrations for fleets and technology partners.",
  },
];

export default function FeatureGridSection() {
  return (
    <AnimatedSection className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="What we do" title="One company, four ways to move." />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              as="div"
              delay={index * 0.08}
              className="group rounded-2xl border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-orange/10 transition-colors duration-300 group-hover:bg-brand-orange/20" />
              <h3 className="mt-4 text-lg font-semibold text-brand-purple-dark">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

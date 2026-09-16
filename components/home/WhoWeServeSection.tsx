import { Container, AnimatedSection } from "@/components/shared";
import { SectionHeading } from "./shared";

const audiences = [
  { title: "Riders", description: "Fast, safe, dependable rides in every city we serve." },
  { title: "Drivers", description: "Flexible earning opportunities backed by real support." },
  { title: "Cities & Public Sector", description: "Mobility programs built around community needs." },
  { title: "Partners", description: "Fleet, technology, and airport partners scaling with us." },
];

export default function WhoWeServeSection() {
  return (
    <AnimatedSection className="bg-gray-50 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Who we serve" title="Built around the people who move cities." align="center" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <AnimatedSection
              key={audience.title}
              as="div"
              delay={index * 0.08}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-brand-purple-dark">{audience.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{audience.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

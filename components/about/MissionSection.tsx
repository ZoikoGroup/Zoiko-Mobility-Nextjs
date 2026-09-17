import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow } from "./shared";

const pillars = [
  {
    eyebrow: "Our vision",
    title: "A world where mobility expands access to opportunity.",
    description:
      "We envision mobility that connects people, businesses and communities to opportunity through transportation that is easier to access, safer to navigate and better coordinated across the people and organizations that make movement possible.",
  },
  {
    eyebrow: "Our mission",
    title: "Build trusted technology that makes mobility work better.",
    description:
      "Our mission is to build and operate trusted mobility technology that connects riders, drivers, businesses and transportation partners through accountable, adaptable platforms designed for the realities of each market.",
  },
  {
    eyebrow: "Our purpose",
    title: "Make movement easier to access, easier to provide and easier to coordinate.",
    description: "This is the reason Zoiko Mobility exists and the organizing idea behind everything we build.",
  },
];

export default function MissionSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.eyebrow} className="border-t-2 border-brand-orange pt-5">
              <Eyebrow>{pillar.eyebrow}</Eyebrow>
              <h3 className="mt-2 text-lg font-bold leading-snug text-brand-purple-dark">{pillar.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

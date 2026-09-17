import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow, ListRow } from "./shared";

const rows = [
  {
    title: "Consumer mobility",
    description:
      "Technology designed to help people discover and access eligible transportation services with clearer digital journeys and appropriate handoff into Zoiko Rides.",
  },
  {
    title: "Driver technology",
    description:
      "Technology designed around driver participation and the operational realities of providing mobility services through DriverXtra.",
  },
  {
    title: "Mobility infrastructure",
    description:
      "Systems intended to connect drivers, fleets, transportation providers, businesses and other mobility participants through governed platform capabilities and integrations.",
  },
  {
    title: "Market & operational coordination",
    description:
      "Technology and policy controls designed to adapt to differing regulatory, commercial and operating requirements rather than treating every market as identical.",
  },
];

export default function ScopeSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container>
        <Eyebrow>Our role</Eyebrow>
        <h2 className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
          We build the connective layer of mobility.
        </h2>

        <div className="mt-8 max-w-4xl">
          {rows.map((row, index) => (
            <ListRow key={row.title} {...row} last={index === rows.length - 1} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

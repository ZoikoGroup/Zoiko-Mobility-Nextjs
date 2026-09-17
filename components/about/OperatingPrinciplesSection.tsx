import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow, ListRow } from "./shared";

const principles = [
  { title: "People before abstraction", description: "Metrics are interpreted in terms of riders, drivers, partners and communities affected by the underlying operation." },
  { title: "Trust with evidence", description: "Material public claims require an owner, evidence source and review date." },
  { title: "Innovation with responsibility", description: "New capability is assessed for operational, safety, privacy and regulatory consequences." },
  { title: "Local reality over global assumption", description: "Market-specific requirements can override generic platform defaults." },
  { title: "Driver dignity", description: "Driver-facing product and language treat drivers as participants with agency, not anonymous supply." },
  { title: "Accessibility from the beginning", description: "Accessibility is included in design-system and product acceptance criteria." },
  { title: "Security and privacy by design", description: "Protection and data minimization are considered before launch, not as post-launch remediation." },
  { title: "Simplicity for the user", description: "The platform absorbs internal complexity where possible rather than transferring it to the user." },
  { title: "Ownership and accountability", description: "Material decisions, incidents and claims have named owners." },
  { title: "Continuous improvement", description: "Operational evidence feeds product, policy and control improvement." },
];

export default function OperatingPrinciplesSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container className="max-w-4xl">
        <Eyebrow>How we operate</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
          Operating principles.
        </h2>

        <div className="mt-8">
          {principles.map((principle, index) => (
            <ListRow key={principle.title} {...principle} last={index === principles.length - 1} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

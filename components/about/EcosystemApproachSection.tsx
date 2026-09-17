import Image from "next/image";
import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow, NumberedItem } from "./shared";

const points = [
  {
    title: "Different participants deserve different experiences",
    description:
      "Riders and drivers interact with the same journey from fundamentally different perspectives. Zoiko Rides and DriverXtra therefore remain distinct experiences within one corporate mobility architecture.",
  },
  {
    title: "Existing mobility capacity matters",
    description:
      "Transportation already exists through drivers, fleets, operators and other providers. Where appropriate, technology should connect and coordinate that capacity rather than assume one company must own every vehicle or recreate every layer.",
  },
  {
    title: "Markets are not interchangeable",
    description:
      "Licensing, accessibility, pricing rules, tax, insurance, labor frameworks, airport arrangements and other requirements vary by jurisdiction. Platform policy must be capable of reflecting those differences.",
  },
  {
    title: "Trust is infrastructure",
    description: "Safety, privacy, security, accessibility, evidence and accountability are operating requirements, not marketing themes.",
  },
  {
    title: "Automation requires accountability",
    description:
      "Automation can improve speed and consistency, but decisions that materially affect people require appropriate rules, evidence, oversight and escalation.",
  },
  {
    title: "Growth must follow readiness",
    description:
      "Market expansion should follow credible regulatory, operational, safety, partner, financial and technical readiness rather than geography-as-marketing.",
  },
];

export default function EcosystemApproachSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
        <div>
          <Eyebrow>How we think</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
            We are designing an ecosystem, not just an app.
          </h2>

          <div className="mt-8 flex flex-col gap-6">
            {points.map((point, index) => (
              <NumberedItem key={point.title} number={index + 1} {...point} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[455/788] w-full max-w-xs">
          <Image
            src="/images/about/ecosystem-not-app.webp"
            alt="Riders, drivers and partners connected around a mobility app, above a connected city"
            fill
            sizes="360px"
            className="object-contain"
          />
        </div>
      </Container>
    </AnimatedSection>
  );
}

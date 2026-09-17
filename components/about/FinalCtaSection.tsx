import { AnimatedSection, Button, Container } from "@/components/shared";

const cards = [
  {
    title: "Build with us",
    description:
      "Help build what moves next. Mobility requires expertise across engineering, product, design, operations, safety, commercial strategy, partnerships and other disciplines.",
    ctaLabel: "Explore careers",
    ctaHref: "/careers",
  },
  {
    title: "Work with us",
    description:
      "Connect to the mobility ecosystem. Zoiko Mobility is interested in relevant organizations that can strengthen how mobility is delivered, operated or experienced.",
    ctaLabel: "Partner with Zoiko Mobility",
    ctaHref: "/partner-with-us",
  },
];

export default function FinalCtaSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8"
            >
              <h3 className="text-lg font-bold text-brand-purple-dark">{card.title}</h3>
              <p className="flex-1 text-sm text-gray-600">{card.description}</p>
              <Button href={card.ctaHref} variant="outline-dark" className="w-fit">
                {card.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

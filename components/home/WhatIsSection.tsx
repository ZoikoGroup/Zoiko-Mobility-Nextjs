import { AnimatedSection, Container } from "@/components/shared";

export default function WhatIsSection() {
  return (
    <AnimatedSection className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
            What is Zoiko Mobility?
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Zoiko Mobility Inc is a Zoiko Group company focused on mobility technology. The company develops and
            operates mobility platforms and is the parent company of Zoiko Rides and DriverXtra.
          </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}

import { Container, Button, AnimatedSection } from "@/components/shared";

export default function FinalCtaSection() {
  return (
    <AnimatedSection className="bg-brand-purple-dark py-20 text-white sm:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build the future of mobility together.
        </h2>
        <p className="max-w-xl text-white/70">
          Whether you&apos;re a fleet, a city, or a technology partner, there&apos;s a place for you in the Zoiko
          Mobility ecosystem.
        </p>
        <Button href="/partner-with-us">Partner with us</Button>
      </Container>
    </AnimatedSection>
  );
}

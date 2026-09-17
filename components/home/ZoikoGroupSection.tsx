import { AnimatedSection, Button, Container } from "@/components/shared";

export default function ZoikoGroupSection() {
  return (
    <AnimatedSection className="bg-gray-50 py-16 sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">Part of Zoiko Group</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
            Mobility innovation within a broader technology group.
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Zoiko Mobility Inc is a Zoiko Group company, bringing the Group&apos;s technology capabilities into
            transportation and mobility.
          </p>
        </div>

        <Button href="/company/zoiko-group" variant="outline-dark" className="shrink-0">
          Discover Zoiko Group
        </Button>
      </Container>
    </AnimatedSection>
  );
}

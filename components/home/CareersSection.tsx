import Image from "next/image";
import { AnimatedSection, Button, Container } from "@/components/shared";

export default function CareersSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[568/426] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/home/careers-art.webp"
            alt="Zoiko Mobility team collaborating around a city planning display"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
            Help build what moves next.
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Building mobility requires people across engineering, product, operations, design, partnerships, safety
            and other disciplines.
          </p>
          <Button href="/careers" className="mt-6">
            Explore careers
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}

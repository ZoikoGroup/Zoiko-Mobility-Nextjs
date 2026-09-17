import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, Container } from "@/components/shared";
import { SectionHeading } from "./shared";

const brands = [
  {
    name: "Zoiko Rides",
    href: "/brands/zoiko-rides",
    description: "The rider-facing mobility platform for requesting, planning and managing journeys.",
    linkLabel: "Explore Zoiko Rides",
    image: "/images/home/zoiko-rides-card.webp",
  },
  {
    name: "DriverXtra",
    href: "/brands/driverxtra",
    description: "A driver-focused mobility platform designed around the people and partners who provide transportation services.",
    linkLabel: "Explore DriverXtra",
    image: "/images/home/driverxtra-card.webp",
  },
];

export default function BrandsSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          title="One mobility company. Two focused experiences."
          description="Zoiko Mobility brings together rider-facing and driver-focused technology within one mobility ecosystem, supported by partner and operational infrastructure."
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[572/428] w-full overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-purple-dark">{brand.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{brand.description}</p>
                <Link
                  href={brand.href}
                  className="group/link mt-4 flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
                >
                  {brand.linkLabel}
                  <span aria-hidden className="transition-transform duration-150 group-hover/link:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

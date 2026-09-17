import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow } from "./shared";

const brands = [
  {
    name: "Zoiko Rides",
    href: "/brands/zoiko-rides",
    description:
      "The rider-facing mobility platform. Zoiko Rides is designed around people who need transportation, with experiences for discovering, requesting, scheduling and managing eligible journeys and mobility services as they are available in a market.",
    linkLabel: "Explore Zoiko Rides",
    image: "/images/about/about-zoiko-rides-card.webp",
  },
  {
    name: "DriverXtra",
    href: "/brands/driverxtra",
    description:
      "The driver-focused mobility platform. DriverXtra is designed around drivers and transportation partners participating in the delivery of mobility services.",
    linkLabel: "Explore DriverXtra",
    image: "/images/about/about-driverxtra-card.webp",
  },
];

export default function ParentCompanySection() {
  return (
    <AnimatedSection className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>One mobility company &middot; Distinct experiences</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
            Zoiko Mobility is the mobility parent company within Zoiko Group.
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Its operating brands are designed around distinct participants in the same mobility ecosystem.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-xs flex-col items-center gap-4">
          <Image
            src="/images/about/zoiko-group-logo.png"
            alt="Zoiko Group"
            width={821}
            height={213}
            className="h-8 w-auto"
          />
          <Image
            src="/images/about/zoiko-mobility-logo-stacked.png"
            alt="Zoiko Mobility"
            width={616}
            height={212}
            className="h-10 w-auto"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[572/429] w-full overflow-hidden">
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

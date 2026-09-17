import Image from "next/image";
import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow } from "./shared";

const improvements = [
  "Make mobility easier for riders to understand and access.",
  "Design around the realities of driver participation rather than treating drivers as an anonymous unit of supply.",
  "Make it easier for transportation businesses and partners to connect to a broader mobility ecosystem.",
  "Adapt to different market, city, airport and regulatory realities.",
  "Build safety, privacy, security, accessibility and accountability into the operating model.",
  "Create technology that can evolve as transportation and regulation change.",
];

export default function ProblemSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Why Zoiko Mobility exists</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
            Mobility is bigger than a ride.
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            A journey may look simple to the person taking it. Behind that journey is a wider system: drivers,
            vehicles, transportation businesses, technology, payments, safety processes, accessibility requirements,
            local regulations, airports, cities and communities.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Too often, mobility technology reduces that system to a single transaction. We believe mobility should
            be designed as an ecosystem.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Zoiko Mobility exists to build the connective technology between the people who need transportation and
            the people and organizations that make transportation possible. Our purpose is to make movement easier
            to access, easier to provide and easier to coordinate.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <h3 className="text-sm font-semibold text-brand-purple-dark">What existence should improve</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {improvements.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto mt-10 aspect-[1176/588] w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-100">
          <Image
            src="/images/about/mobility-bigger-than-ride.webp"
            alt="Rider using a mobility app alongside connected transportation and airport services"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </AnimatedSection>
  );
}

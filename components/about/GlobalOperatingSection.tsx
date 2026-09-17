import Image from "next/image";
import { AnimatedSection, Container } from "@/components/shared";
import { CheckItem } from "./shared";

const checklist = [
  "Regulatory authority and product eligibility",
  "Safety and incident operations",
  "Payments, settlement, tax and financial controls",
  "Airport or local operating permissions where relevant",
  "Approved local policies and customer communications",
  "Appropriate transportation partners and/or driver capacity",
  "Insurance and risk requirements",
  "Customer and partner support readiness",
  "Technical reliability, observability and recovery",
];

export default function GlobalOperatingSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container className="max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
          Global technology. Local operating truth.
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Mobility happens in real places. Laws, licensing, transportation patterns, airport rules, accessibility
          obligations, tax structures, labor frameworks, insurance requirements, infrastructure and public-policy
          expectations differ by jurisdiction. For that reason, Zoiko Mobility treats the operating environment as
          part of the product architecture. The objective is a coherent technology platform capable of applying
          market-specific rules rather than assuming one global policy fits every market.
        </p>

        <h3 className="mt-8 text-sm font-semibold text-brand-purple-dark">Scale should be earned.</h3>
        <p className="mt-2 text-sm text-gray-600">
          Market count is not by itself evidence of operating strength. A credible launch depends on the conditions
          behind the interface working together.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
          {checklist.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Zoiko Mobility should expand when those foundations are credible, not simply when a location can be added
          to a marketing map.
        </p>

        <div className="relative mt-8 aspect-[1176/588] w-full overflow-hidden rounded-2xl border border-gray-100">
          <Image
            src="/images/about/global-operating-truth.webp"
            alt="City infrastructure connected through governed regulatory, financial and technology systems"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </AnimatedSection>
  );
}

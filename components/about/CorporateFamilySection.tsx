import Link from "next/link";
import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow } from "./shared";

const offices = [
  {
    label: "Corporate Headquarters",
    lines: ["Zoiko Mobility Inc", "1401 21st Street, Suite R", "Sacramento, California 95811", "United States"],
  },
  {
    label: "European Headquarters",
    lines: [
      "Zoiko Mobility Inc — European Headquarters",
      "167-169 Great Portland Street, 5th Floor",
      "London W1W 5PF",
      "United Kingdom",
    ],
  },
];

export default function CorporateFamilySection() {
  return (
    <AnimatedSection className="bg-gray-50 py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Our corporate family</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
          Mobility within a broader technology group.
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Zoiko Mobility Inc is a Zoiko Group company. The relationship can provide access to broader technology and
          operating capabilities where they are relevant, while Zoiko Mobility retains a dedicated mobility mandate
          and clear accountability for its own products, partners and operations.
        </p>
        <Link
          href="/company/zoiko-group"
          className="group/link mt-3 flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
        >
          Discover Zoiko Group
          <span aria-hidden className="transition-transform duration-150 group-hover/link:translate-x-0.5">
            →
          </span>
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2">
          {offices.map((office) => (
            <div key={office.label}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{office.label}</p>
              <address className="mt-2 text-sm not-italic text-gray-600">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

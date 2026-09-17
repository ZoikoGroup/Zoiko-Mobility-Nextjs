"use client";

import { useState } from "react";
import { AnimatedSection, Container } from "@/components/shared";

const faqs = [
  {
    q: "What is Zoiko Mobility?",
    a: "Zoiko Mobility Inc is a Zoiko Group company focused on mobility technology. The company develops and operates mobility platforms and is the parent company of Zoiko Rides and DriverXtra.",
  },
  {
    q: "Why does Zoiko Mobility exist?",
    a: "To build the connective technology between the people who need transportation and the people and organizations that make transportation possible, so movement is easier to access, provide and coordinate.",
  },
  {
    q: "What does Zoiko Mobility do?",
    a: "We build and operate mobility technology that connects riders, drivers, businesses and transportation partners through Zoiko Rides and DriverXtra, supported by shared mobility infrastructure.",
  },
  {
    q: "Is Zoiko Mobility the same as Zoiko Rides?",
    a: "No. Zoiko Mobility is the parent company. Zoiko Rides is the rider-facing platform, and DriverXtra is the driver-focused platform.",
  },
  {
    q: "What is DriverXtra?",
    a: "DriverXtra is Zoiko Mobility's driver-focused mobility platform, designed around drivers and transportation partners participating in the delivery of mobility services.",
  },
  {
    q: "Who owns Zoiko Mobility?",
    a: "Zoiko Mobility Inc is a Zoiko Group company, operating with a dedicated mobility mandate and clear accountability for its own products, partners and operations.",
  },
  {
    q: "Where is Zoiko Mobility based?",
    a: "Zoiko Mobility's corporate headquarters is in Sacramento, California, United States, with a European headquarters in London, United Kingdom.",
  },
  {
    q: "Where are Zoiko Rides and DriverXtra available?",
    a: "Availability varies by market. Expansion follows credible regulatory, operational, safety, partner, financial and technical readiness in each location.",
  },
  {
    q: "Does Zoiko Mobility own vehicles?",
    a: "Zoiko Mobility's role is to connect and coordinate existing transportation capacity — drivers, fleets and operators — rather than to own or operate a vehicle fleet itself.",
  },
  {
    q: "How does Zoiko Mobility work with transportation companies?",
    a: "Transportation businesses and fleet partners can connect their vehicles, drivers, operations and capacity to the broader mobility ecosystem through Zoiko Mobility's partner infrastructure.",
  },
  {
    q: "Does Zoiko Mobility work with businesses?",
    a: "Yes. Businesses can access transportation experiences for employees, customers, guests or partners where commercially available.",
  },
  {
    q: "Does Zoiko Mobility work with cities and public authorities?",
    a: "Yes. We work with cities and public-sector partners on mobility coordination that operates within local requirements and public-policy constraints.",
  },
  {
    q: "How does Zoiko Mobility approach driver earnings and commercial terms?",
    a: "Product and commercial decisions are evaluated from both sides of the journey — durable rider value should not depend on making driver participation unsustainable.",
  },
  {
    q: "How does Zoiko Mobility approach safety?",
    a: "Safety principles are designed into the mobility experience from the start, with appropriate identity, incident, support and operational processes.",
  },
  {
    q: "How does Zoiko Mobility use AI or automated decision-making?",
    a: "Automation is used to improve speed and consistency, but decisions that materially affect people require appropriate rules, evidence, oversight and escalation.",
  },
  {
    q: "How does Zoiko Mobility protect privacy?",
    a: "Personal information is collected for defined purposes and handled proportionately, transparently and securely, with privacy considered before launch rather than after.",
  },
  {
    q: "How does Zoiko Mobility approach accessibility?",
    a: "Accessibility is included in design-system and product acceptance criteria from the beginning. Digital experiences target WCAG 2.2 AA, with stronger internal standards where practical.",
  },
  {
    q: "What is Zoiko Mobility's sustainability position?",
    a: "We aim to build technology that supports more efficient, coordinated use of existing transportation capacity, and to operate responsibly as our platforms and markets grow.",
  },
  {
    q: "How can I work for Zoiko Mobility?",
    a: "Explore open roles and life at Zoiko Mobility on our careers page — mobility needs expertise across engineering, product, design, operations, safety and other disciplines.",
  },
  {
    q: "How can my organization partner with Zoiko Mobility?",
    a: "Visit our Partners section to explore fleet, business, developer, community and media partnership opportunities, or reach out through our partner enquiries page.",
  },
  {
    q: "How can media or other stakeholders contact Zoiko Mobility?",
    a: "Media and other stakeholders can reach us through the contact details listed on our Newsroom and Company pages.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatedSection className="bg-gray-50 py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">Company questions.</h2>

        <div className="mt-6 border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-brand-purple-dark"
                >
                  {faq.q}
                  <span
                    aria-hidden
                    className={`shrink-0 text-lg text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}

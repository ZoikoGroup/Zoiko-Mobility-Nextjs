import { AnimatedSection, Container } from "@/components/shared";
import { Eyebrow } from "./shared";

export default function TwoSidedSection() {
  return (
    <AnimatedSection className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
          A mobility platform serves people on both sides of the journey.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-brand-purple-dark">For riders</h3>
            <p className="mt-2 text-sm text-gray-600">
              Riders should be able to understand what they are requesting, the material terms of the service, the
              expected price where a quote is provided, and where to obtain help when something goes wrong. The
              experience should reduce uncertainty rather than create it.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-purple-dark">For drivers</h3>
            <p className="mt-2 text-sm text-gray-600">
              Drivers are professional participants in the mobility ecosystem. Their time, decisions, safety,
              commercial terms and operating realities materially affect whether the platform can deliver durable
              value.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl border-l-2 border-brand-orange pl-6">
          <Eyebrow>Operating principle</Eyebrow>
          <p className="mt-2 text-base font-semibold text-brand-purple-dark">
            Durable rider value cannot depend on making driver participation unsustainable.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Product and commercial decisions should be evaluated from both sides of the journey. This is a
            principle, not an earnings-guarantee or employment-status statement.
          </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}

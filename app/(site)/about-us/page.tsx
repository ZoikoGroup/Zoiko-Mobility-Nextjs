import type { Metadata } from "next";
import {
  HeroSection,
  ProblemSection,
  MissionSection,
  ParentCompanySection,
  ScopeSection,
  ParticipantsSection,
  EcosystemApproachSection,
  TwoSidedSection,
  TrustSection,
  GlobalOperatingSection,
  CorporateFamilySection,
  OperatingPrinciplesSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Zoiko Mobility",
  description:
    "Zoiko Mobility builds and operates mobility technology that connects riders, drivers, businesses and transportation partners through Zoiko Rides and DriverXtra.",
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <MissionSection />
      <ParentCompanySection />
      <ScopeSection />
      <ParticipantsSection />
      <EcosystemApproachSection />
      <TwoSidedSection />
      <TrustSection />
      <GlobalOperatingSection />
      <CorporateFamilySection />
      <OperatingPrinciplesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}

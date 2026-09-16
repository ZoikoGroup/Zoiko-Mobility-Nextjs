export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href: string;
  links: NavLink[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Our Brands",
    href: "/our-brands",
    links: [
      { label: "Zoiko Rides", href: "/brands/zoiko-rides" },
      { label: "DriverXtra", href: "/brands/driverxtra" },
      { label: "Our Brands", href: "/our-brands" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    links: [
      { label: "Ride Platforms", href: "/what-we-do/ride-platforms" },
      { label: "Driver Technology", href: "/what-we-do/driver-technology" },
      { label: "Business Mobility", href: "/what-we-do/business-mobility" },
      { label: "Partner Ecosystem", href: "/what-we-do/partner-ecosystem" },
    ],
  },
  {
    label: "Safety & Trust",
    href: "/safety-and-trust",
    links: [
      { label: "Safety", href: "/safety-and-trust/safety" },
      { label: "Privacy", href: "/safety-and-trust/privacy" },
      { label: "Security", href: "/safety-and-trust/security" },
      { label: "Accessibility", href: "/safety-and-trust/accessibility" },
      { label: "Responsible Technology", href: "/safety-and-trust/responsible-technology" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    links: [
      { label: "Fleet & Transportation", href: "/partners/fleet-and-transportation" },
      { label: "Technology Partners", href: "/partners/technology-partners" },
      { label: "Become a Partner", href: "/partners/become-a-partner" },
      { label: "Partner Enquiries", href: "/partners/enquiries" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Our Story", href: "/company/our-story" },
      { label: "Zoiko Group", href: "/company/zoiko-group" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
  {
    label: "Newsroom",
    href: "/newsroom",
    links: [
      { label: "News", href: "/newsroom/news" },
      { label: "Announcements", href: "/newsroom/announcements" },
      { label: "Insights", href: "/newsroom/insights" },
      { label: "Media Resources", href: "/newsroom/media-resources" },
      { label: "FAQ", href: "/newsroom/faq" },
    ],
  },
];

export const footerColumns: NavGroup[] = [
  {
    label: "Mobility",
    href: "/mobility",
    links: [
      { label: "About Zoiko Mobility", href: "/mobility/about" },
      { label: "Mobility Technology", href: "/mobility/technology" },
      { label: "Mobility Platform", href: "/mobility/platform" },
      { label: "Cities & Communities", href: "/mobility/cities-and-communities" },
    ],
  },
  {
    label: "Brands",
    href: "/our-brands",
    links: primaryNav[0].links,
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    links: primaryNav[1].links,
  },
  {
    label: "Safety & Trust",
    href: "/safety-and-trust",
    links: primaryNav[2].links,
  },
  {
    label: "Partners",
    href: "/partners",
    links: primaryNav[3].links,
  },
  {
    label: "Business & Public Sector",
    href: "/business-and-public-sector",
    links: [
      { label: "Business Mobility", href: "/business-and-public-sector/business-mobility" },
      { label: "Airports & Travel", href: "/business-and-public-sector/airports-and-travel" },
      { label: "Cities & Public Sector", href: "/business-and-public-sector/cities-and-public-sector" },
      { label: "Register Your Interest", href: "/business-and-public-sector/register-interest" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    links: primaryNav[4].links,
  },
  {
    label: "Newsroom & Resources",
    href: "/newsroom",
    links: primaryNav[5].links,
  },
  {
    label: "Careers & Support",
    href: "/careers",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Life at Zoiko Mobility", href: "/careers/life-at-zoiko-mobility" },
      { label: "Help / Support", href: "/support" },
      { label: "Accessibility Feedback", href: "/support/accessibility-feedback" },
    ],
  },
  {
    label: "Legal & Governance",
    href: "/legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Terms of Use", href: "/legal/terms-of-use" },
      { label: "Security", href: "/legal/security" },
      { label: "Legal Notices", href: "/legal/notices" },
      { label: "Sitemap", href: "/legal/sitemap" },
    ],
  },
];

export const headquarters = [
  {
    label: "Headquarters",
    lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811", "United States"],
  },
  {
    label: "European Headquarters",
    lines: ["167-169 Great Portland Street, 5th Floor", "London W1W 5PF", "United Kingdom"],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" as const },
  { label: "YouTube", href: "https://www.youtube.com", icon: "youtube" as const },
  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" as const },
];

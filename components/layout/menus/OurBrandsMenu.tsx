import Image from "next/image";
import Link from "next/link";
import { Eyebrow, MenuHeading, MenuPanel } from "./shared";

const brands = [
  {
    name: "Zoiko Rides",
    href: "/brands/zoiko-rides",
    tagline: "Rider-facing mobility",
    ctaLabel: "Explore Zoiko Rides",
    logo: "/images/menu/zoiko-rides-logo.png",
    logoWidth: 1072,
    logoHeight: 180,
  },
  {
    name: "DriverXtra",
    href: "/brands/driverxtra",
    tagline: "Driver-focused mobility",
    ctaLabel: "Explore DriverXtra",
    logo: "/images/menu/DriverXtra.png",
    logoWidth: 744,
    logoHeight: 180,
  },
];

export default function OurBrandsMenu() {
  return (
    <MenuPanel className="w-[850px] max-w-[92vw]">
      <div className="p-10">
        <Eyebrow>Our Brands</Eyebrow>
        <MenuHeading>One mobility company. Two focused experiences.</MenuHeading>

        <div className="mt-5 flex flex-wrap gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-[217px] w-[367px] flex-col rounded-2xl border border-[#3A3652]/20 bg-white p-5 shadow-[0_0_4px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_0_8px_rgba(0,0,0,0.15)]"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={brand.logoWidth}
                height={brand.logoHeight}
                className="h-6 w-auto self-start object-contain"
              />
              <p className="mt-4 text-sm text-gray-500">{brand.tagline}</p>
              <Link
                href={brand.href}
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
              >
                {brand.ctaLabel}
                <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MenuPanel>
  );
}

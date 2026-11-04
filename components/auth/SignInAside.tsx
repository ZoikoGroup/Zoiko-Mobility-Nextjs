import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { BarsIcon, BoltIcon, CarIcon, DriverIcon, FleetIcon } from "./icons";

type Feature = {
  title: string;
  lines: [string, string?];
  icon: ReactNode;
};

const iconClass = "size-8 text-white";

const topRow: Feature[] = [
  { title: "Zoiko Rides", lines: ["Reliable, safe rides"], icon: <CarIcon className={iconClass} /> },
  { title: "DriverXtra", lines: ["Services and", "marketplace"], icon: <DriverIcon className={iconClass} /> },
  { title: "Fleet Solutions", lines: ["SME and enterprise", "fleets."], icon: <FleetIcon className={iconClass} /> },
];

const bottomRow: Feature[] = [
  { title: "EV Transition", lines: ["Charging, servicing", "and advice"], icon: <BoltIcon className={iconClass} /> },
  { title: "Mobility Network", lines: ["Partners and", "innovations"], icon: <BarsIcon className={iconClass} /> },
];

function FeatureTile({ feature, faded }: { feature: Feature; faded?: boolean }) {
  return (
    <li
      className={clsx(
        "relative h-[74px] w-46 shrink-0 overflow-hidden rounded-xl font-inter-ui text-white shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)]",
        faded ? "bg-auth-purple/60" : "bg-auth-purple/80"
      )}
    >
      <span className="absolute left-2 top-2">{feature.icon}</span>
      <span className="absolute left-12 top-2 whitespace-nowrap text-base font-semibold leading-5">
        {feature.title}
      </span>
      <span className="absolute left-12 top-[35px] whitespace-nowrap text-sm leading-[17px] text-white/80">
        {feature.lines[0]}
        {feature.lines[1] && (
          <>
            <br />
            {feature.lines[1]}
          </>
        )}
      </span>
    </li>
  );
}

export default function SignInAside() {
  return (
    <aside className="relative hidden overflow-hidden lg:block lg:w-[55%]">
      <Image
        src="/images/sign-in/sign-in-city-aside.webp"
        alt="Electric car driving on a lit city highway at sunset"
        fill
        priority
        sizes="55vw"
        className="object-cover"
      />

      <div className="relative flex h-full flex-col px-12 pt-16 xl:px-[86px]">
        <Link
          href="/"
          aria-label="Zoiko Mobility home"
          className="inline-flex h-16 w-40 items-center justify-center rounded-2xl bg-white px-2"
        >
          <Image src="/logo.png" alt="Zoiko Mobility" width={291} height={100} className="h-12 w-auto" />
        </Link>

        <h1 className="mt-[50px] whitespace-nowrap font-manrope text-[40px] font-extrabold leading-[46px] xl:text-5xl xl:leading-[55.47px]">
          <span className="block text-white">Connecting people,</span>
          <span className="block w-fit bg-linear-to-r from-auth-purple from-25% to-auth-orange to-60% bg-clip-text pb-1 text-transparent">
            vehicles &amp; opportunities.
          </span>
        </h1>

        <p className="mt-3.5 max-w-133.25 font-plex text-lg leading-6 tracking-tight text-white/90">
          Technology, services and trusted infrastructure for a cleaner, safer and more connected mobility future.
        </p>

        <div className="mt-9 flex flex-col gap-3">
          <ul className="flex gap-3">
            {topRow.map((feature) => (
              <FeatureTile key={feature.title} feature={feature} />
            ))}
          </ul>
          <ul className="flex gap-3 pl-[98px]">
            {bottomRow.map((feature) => (
              <FeatureTile key={feature.title} feature={feature} faded />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

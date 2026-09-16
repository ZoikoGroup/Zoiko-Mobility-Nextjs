import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  /** Wrap the mark in a white card, used when placed on a dark background. */
  boxed?: boolean;
  className?: string;
};

export default function Logo({ boxed = false, className }: LogoProps) {
  return (
    <Link href="/" aria-label="Zoiko Mobility home" className={clsx("inline-flex shrink-0", className)}>
      <span
        className={clsx(
          "inline-flex items-center",
          boxed && "rounded-lg bg-white px-3 py-2 shadow-sm"
        )}
      >
        <Image src="/logo.png" alt="Zoiko Mobility" width={291} height={100} priority className="h-9 w-auto sm:h-10" />
      </span>
    </Link>
  );
}

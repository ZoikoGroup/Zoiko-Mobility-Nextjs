import { Container, Logo } from "@/components/shared";
import { footerColumns, headquarters } from "@/lib/navigation";
import { SocialLinks } from "./shared";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-white">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo boxed />
            <p className="mt-4 text-sm text-white/70">
              Parent company of Zoiko Rides and DriverXtra.
              <br />
              Mobility for people. Opportunity for communities.
            </p>
            <SocialLinks className="mt-6 flex items-center gap-3" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {headquarters.map((hq) => (
              <div key={hq.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">{hq.label}</p>
                <address className="mt-2 text-sm not-italic text-white/70">
                  {hq.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">{column.label}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10"
          >
            Cookie Settings
          </button>

          <label className="inline-flex items-center gap-2 text-xs font-medium text-white/80">
            <span className="sr-only">Region and language</span>
            <select
              defaultValue="global-en"
              className="rounded-full border border-white/20 bg-transparent px-4 py-2 text-xs text-white/80 [&>option]:text-gray-900"
            >
              <option value="global-en">Global / EN</option>
              <option value="us-en">United States / EN</option>
              <option value="uk-en">United Kingdom / EN</option>
            </select>
          </label>
        </div>

        <div className="mt-8 space-y-2 text-xs text-white/50">
          <p>© {year} Zoiko Mobility Inc. All rights reserved. · A Zoiko Group company.</p>
          <p>
            Zoiko Mobility Inc is the parent company of Zoiko Rides and DriverXtra. Product and service availability
            varies by market and is subject to applicable local requirements.
          </p>
        </div>
      </Container>
    </footer>
  );
}

import { ArrowLink, Eyebrow, MenuHeading, MenuPanel } from "./shared";
import type { NavGroup } from "@/lib/navigation";

export default function SimpleMenu({ group }: { group: NavGroup }) {
  return (
    <MenuPanel className="w-full max-w-xs">
      <div className="p-5">
        <Eyebrow>{group.label}</Eyebrow>
        <MenuHeading className="text-base">Explore {group.label}</MenuHeading>
        <div className="mt-4 flex flex-col gap-2.5">
          {group.links.map((link) => (
            <ArrowLink key={link.href} href={link.href}>
              {link.label}
            </ArrowLink>
          ))}
        </div>
      </div>
    </MenuPanel>
  );
}

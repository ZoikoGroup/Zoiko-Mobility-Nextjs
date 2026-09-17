export type MenuIconName =
  | "layers"
  | "people"
  | "building"
  | "shield"
  | "lock"
  | "accessibility"
  | "leaf"
  | "briefcase"
  | "steering-wheel"
  | "landmark"
  | "code"
  | "megaphone"
  | "handshake"
  | "document"
  | "mail"
  | "globe"
  | "person"
  | "truck"
  | "plane";

const paths: Record<MenuIconName, string> = {
  layers: "M12 3 2 8l10 5 10-5-10-5Zm-10 8 10 5 10-5M2 16l10 5 10-5",
  people: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.31 3.13-6 7-6s7 2.69 7 6M16 14.5c3.31.34 6 2.68 6 5.5",
  building: "M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M12 21v-9h7a1 1 0 0 1 1 1v8M7 7h.01M7 11h.01M7 15h.01M4 21h16",
  shield: "M12 3 4.5 6v6c0 4.5 3.2 7.9 7.5 9 4.3-1.1 7.5-4.5 7.5-9V6L12 3Z",
  lock: "M6 11V8a6 6 0 1 1 12 0v3M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z",
  accessibility: "M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 8 5-1.5V8.8L5.6 10 5 8.2 12 6l7 2.2-.6 1.8-4.4-1.2v2.7L19 13l-.6 1.9-5-1.5V16l3.6 6-1.8.9L12 17l-3.2 5.9-1.8-.9 3.6-6v-3.6l-5 1.5L5 13Z",
  leaf: "M20 4c-8 0-14 5-14 12 0 1.1.15 2.15.43 3.14C13 18 20 12 20 4Z M6.5 19.5C10 15 15 10 20 4",
  briefcase: "M4 8h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm4 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18",
  "steering-wheel":
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-5.2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6ZM12 3v3.2M4.2 16.5l2.9-1.6M19.8 16.5l-2.9-1.6",
  landmark:
    "M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 10v6M10 10v6M14 10v6M18 10v6",
  code: "m8 9-4 3 4 3M16 9l4 3-4 3M13.5 6.5l-3 11",
  megaphone:
    "M3 11v2a2 2 0 0 0 2 2h1l2 5h2l-1.5-5H12l7 3V6l-7 3H6a2 2 0 0 0-2 2Zm5 4v4a1 1 0 0 0 1 1h1v-5",
  handshake:
    "m2 12 4-3 3.5 3-2 2 2.5 2.5 2-2 3 3 4-4M9 9l3 3M15 9l-4 4",
  document:
    "M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8l-4-5Zm0 0v5h4M9 13h6M9 17h6",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 0 8 7 8-7",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z",
  person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9c0-4 3.6-7 8-7s8 3 8 7",
  truck:
    "M2 7h11v10H2Zm11 3h5l3 3v4h-8Zm-8.5 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  plane:
    "m2 12 20-8-8 20-2-8-8-2Z",
};

type MenuIconProps = {
  name: MenuIconName;
  className?: string;
};

export function MenuIcon({ name, className }: MenuIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}

type IconProps = { className?: string };

export function CarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden className={className}>
      <path d="M8.9 7.6A3 3 0 0 1 11.7 5.5h8.6a3 3 0 0 1 2.8 2.1l1.6 5.1h.8a1.5 1.5 0 0 1 0 3h-.2c.4.5.7 1.2.7 1.9v7.4a1.5 1.5 0 0 1-1.5 1.5h-1.6a1.5 1.5 0 0 1-1.5-1.5v-1.3H10.6v1.3A1.5 1.5 0 0 1 9.1 26.5H7.5A1.5 1.5 0 0 1 6 25v-7.4c0-.7.3-1.4.7-1.9h-.2a1.5 1.5 0 0 1 0-3h.8l1.6-5.1Zm2.8.9-1.3 4.2h11.2l-1.3-4.2H11.7Zm-1.2 11.9a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm11 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z" />
    </svg>
  );
}

export function DriverIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="16" cy="16" r="13.5" />
      <path d="M8 16a8 8 0 0 1 16 0" />
      <path d="M6.5 25.5c2-3.5 5.4-5.5 9.5-5.5s7.5 2 9.5 5.5" />
      <circle cx="16" cy="14.5" r="2.5" />
    </svg>
  );
}

export function FleetIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="16" cy="7" r="4" />
      <circle cx="6" cy="12.5" r="3" />
      <circle cx="26" cy="12.5" r="3" />
      <path d="M10.5 28v-4a5.5 5.5 0 0 1 11 0v4" />
      <path d="M2 26v-1.5A4.5 4.5 0 0 1 8.5 20.5M30 26v-1.5a4.5 4.5 0 0 0-6.5-4" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M17.5 2.7 6.3 17.3h9.4l-1.4 12 11.4-15.4h-9.5l1.3-11.2Z" />
    </svg>
  );
}

export function BarsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden className={className}>
      <rect x="1" y="21" width="6" height="8" rx="1" />
      <rect x="9.5" y="15" width="6" height="14" rx="1" />
      <rect x="18" y="9" width="6" height="20" rx="1" />
      <rect x="26.5" y="3" width="5" height="26" rx="1" />
    </svg>
  );
}

export function EyeIcon({ open, className }: IconProps & { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M1.7 10S4.7 4.2 10 4.2 18.3 10 18.3 10 15.3 15.8 10 15.8 1.7 10 1.7 10Z" />
      <circle cx="10" cy="10" r="2.5" />
      {!open && <path d="M3 3l14 14" />}
    </svg>
  );
}

export function MicrosoftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden className={className}>
      <rect x="2.8" y="2.3" width="11" height="11" fill="#F25022" />
      <rect x="15.1" y="2.3" width="11" height="11" fill="#7FBA00" />
      <rect x="2.8" y="14.6" width="11" height="11" fill="#00A4EF" />
      <rect x="15.1" y="14.6" width="11" height="11" fill="#FFB900" />
    </svg>
  );
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9Z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9Z"
      />
    </svg>
  );
}

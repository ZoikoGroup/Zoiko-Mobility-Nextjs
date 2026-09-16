"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, useful for staggering sibling sections/cards. */
  delay?: number;
  as?: "section" | "div";
};

/**
 * Reveals its children by animating from a translated, transparent state
 * up into place the first time it scrolls into view — not a page loader.
 */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "section",
}: AnimatedSectionProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(className)}
    >
      {children}
    </Component>
  );
}

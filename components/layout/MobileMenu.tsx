"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/shared";
import { primaryNav } from "@/lib/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
            {primaryNav.map((group) => {
              const isExpanded = expanded === group.label;
              return (
                <div key={group.label} className="border-b border-gray-100 last:border-none">
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : group.label)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-gray-800"
                  >
                    {group.label}
                    <svg
                      aria-hidden
                      viewBox="0 0 20 20"
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.24 4.38a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pb-3 pl-3">
                          {group.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={onClose}
                              className="rounded-md py-2 text-sm text-gray-600"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <Button href="/partner-with-us" className="mt-4 justify-center" >
              Partner with us
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

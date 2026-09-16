"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-purple-dark text-white">
      <Container className="flex flex-col items-start gap-6 py-20 sm:py-28 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-wider text-brand-orange"
        >
          Mobility for people. Opportunity for communities.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Building the platforms that move cities forward.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-base text-white/70 sm:text-lg"
        >
          Zoiko Mobility is the parent company of Zoiko Rides and DriverXtra, powering ride platforms, driver
          technology, and business mobility for cities and communities around the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button href="/partner-with-us">Partner with us</Button>
        </motion.div>
      </Container>
    </section>
  );
}

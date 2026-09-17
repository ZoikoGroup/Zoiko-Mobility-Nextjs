"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container, Button } from "@/components/shared";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-15">
        <div className="flex flex-col items-start gap-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-wider text-brand-orange"
          >
            Zoiko Mobility Inc &middot; A Zoiko Group company
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold tracking-tight text-brand-purple-dark sm:text-5xl"
          >
            Technology for a world in motion.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-base text-gray-600"
          >
            Zoiko Mobility builds and operates mobility technology that connects riders, drivers, businesses and
            transportation partners — through Zoiko Rides and DriverXtra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 flex flex-wrap items-center gap-3"
          >
            <Button href="/our-brands">Explore our brands</Button>
            <Button href="/partner-with-us" variant="outline-dark">
              Partner with us
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <Image
            src="/images/home/hero-mobility-collage.webp"
            alt="Riders, drivers, businesses and partners connected through Zoiko Mobility technology"
            width={653}
            height={600}
            priority
            className="h-auto w-full"
          />
        </motion.div>
      </Container>
    </section>
  );
}

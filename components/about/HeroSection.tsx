"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container, Button } from "@/components/shared";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start gap-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-wider text-brand-orange"
          >
            About Zoiko Mobility
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold tracking-tight text-brand-purple-dark sm:text-5xl"
          >
            Building mobility around the people who depend on it.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-base text-gray-600"
          >
            Mobility connects people to work, family, opportunity, commerce and communities. Zoiko Mobility exists
            to make those connections work better by building technology that connects riders, drivers, businesses
            and transportation partners through a more coordinated, accountable and adaptable mobility ecosystem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-base text-gray-600"
          >
            We are the parent company of Zoiko Rides and DriverXtra, and a Zoiko Group company.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2"
          >
            <Button href="/about-us/ecosystem">Explore our mobility ecosystem</Button>
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
            src="/images/about/about-hero-collage.webp"
            alt="Riders, drivers, businesses and communities connected through Zoiko Mobility technology"
            width={581}
            height={561}
            priority
            className="h-auto w-full rounded-2xl"
          />
        </motion.div>
      </Container>
    </section>
  );
}

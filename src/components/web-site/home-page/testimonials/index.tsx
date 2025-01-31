"use client";

import { TESTIMONIALS } from "@/constants/testimonials";
import React from "react";
import Card from "./card";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-20 sm:pt-40 grid gap-10">
      <div className="grid gap-5 layout-spacing">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`text-3xl lg:text-5xl w-full text-center font-bold relative mx-auto text-primary`}
        >
          LoomFare users share their experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className=" max-w-4xl text-gray-500 text-center text-lg sm:text-xl mx-auto"
        >
          Renowned and relied upon by an extensive network of more than 100
          esteemed companies spanning the globe, our services exemplify
          excellence and unparalleled reliability.
        </motion.p>
      </div>

      <div className="overflow-x-auto scrollbar-hidden">
        <Marquee speed={30} pauseOnHover>
          <div className="grid grid-cols-[repeat(10,_300px)] gap-5 select-none mx-3">
            {TESTIMONIALS.map((t, i) => (
              <Card
                key={i}
                name={t.name}
                img={t.img}
                subject={t.subject}
                testimony={t.testimony}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

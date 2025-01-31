"use client";

import { WHY_CHOOSE_US } from "@/constants/why-choose-us";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="pt-20 sm:pt-40 layout-spacing">
      <div className="container mx-auto grid gap-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`text-3xl lg:text-5xl text-center font-bold text-primary relative transition-all duration-500`}
        >
          Why Choose Us
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {WHY_CHOOSE_US.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "linear" }}
              className="p-5 sm:p-10 rounded-lg border"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "linear" }}
                className="grid w-40 mx-auto justify-center items-center"
              >
                <Image
                  src={data.img.url}
                  width={200}
                  height={200}
                  alt={data.img.alt}
                />
              </motion.span>
              <div className="mt-4 grid gap-3 text-center">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "linear" }}
                  className="text-xl font-semibold md:text-2xl text-primary"
                >
                  {data.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "linear" }}
                  className="text-gray-500 sm:text-lg"
                >
                  {data.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

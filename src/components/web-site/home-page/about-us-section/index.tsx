"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="relative layout-spacing grid gap-10 pt-20 sm:pt-40"
    >
      <div className="grid lg:grid-flow-col justify-center lg:justify-between container mx-auto gap-5 lg:gap-20 items-center">
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear" }}
          className="block overflow-hidden w-[40vw] min-w-[280px] max-w-[500px] mx-auto"
        >
          <Image
            src={"/about-us-img.svg"}
            width={500}
            height={500}
            priority
            layout="responsive"
            alt="About Us Illustration"
          />
        </motion.span>

        <div className="grid gap-5 lg:gap-10 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`text-3xl lg:text-5xl text-center lg:text-left font-bold text-primary`}
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: "-50%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear" }}
            className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-500 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
          >
            At LoomFare, we are redefining how you interact with
            cryptocurrencies. Our secure, intuitive platform empowers users to
            seamlessly send, receive, trade, and withdraw digital assets.
            Whether you&apos;re a beginner or an expert, we prioritize trust,
            simplicity, and innovation, making cryptocurrency accessible to
            everyone. Experience the future of digital finance with us.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

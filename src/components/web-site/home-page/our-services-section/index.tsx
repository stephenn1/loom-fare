"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function OurServicesSection() {
  return (
    <section
      id="our-services"
      className="relative layout-spacing grid gap-10 sm:gap-20 pt-20 sm:pt-40"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={`text-3xl lg:text-5xl text-center font-bold text-primary relative transition-all duration-500`}
      >
        Our Services
      </motion.h2>

      <div className="grid lg:grid-flow-col justify-center lg:justify-between container mx-auto gap-5 lg:gap-20 items-center">
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="block overflow-hidden w-[40vw] min-w-[280px] max-w-[500px] mx-auto"
        >
          <Image
            src={"/our-services-img-1.png"}
            width={500}
            height={500}
            priority
            layout="responsive"
            alt="Our Services Illustration"
          />
        </motion.span>

        <div className="grid gap-5 max-w-xl overflow-hidden">
          <div className={`grid gap-3 overflow-hidden relative`}>
            <motion.h2
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear" }}
              className={`text-xl sm:text-3xl text-center lg:text-left font-bold text-primary`}
            >
              Send and receive cryptocurrency instantly
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", delay: 0.3 }}
              className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-700 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
            >
              Send and receive cryptocurrencies instantly. Also track the
              crypto, swap progress on the exchange page.
            </motion.p>
          </div>

          <div className={`grid gap-3 overflow-hidden relative`}>
            <motion.h2
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", delay: 0.5 }}
              className={`text-xl sm:text-3xl text-center lg:text-left font-bold text-primary`}
            >
              Real-time copy trading
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", delay: 0.7 }}
              className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-700 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
            >
              Copy trading lets you replicate another trader&apos;s positions in
              real time. Choose your investment amount, and your account will
              automatically mirror their trades.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-flow-col justify-center lg:justify-between container mx-auto gap-5 lg:gap-20 items-center">
        <div className="grid gap-5 max-w-xl overflow-hidden order-1 lg:order-none">
          <div className={`grid gap-3 overflow-hidden relative `}>
            <motion.h2
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear" }}
              className={`text-xl sm:text-3xl text-center lg:text-left font-bold text-primary`}
            >
              Instant withdrawals
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", delay: 0.3 }}
              className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-700 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
            >
              Experience our instant withdrawal feature, enabling immediate
              transfers to your bank acocunt.
            </motion.p>
          </div>

          <div className={`grid gap-3 overflow-hidden relative `}>
            <motion.h2
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", delay: 0.5 }}
              className={`text-xl sm:text-3xl text-center lg:text-left font-bold text-primary`}
            >
              Effortless Crypto Mining
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", delay: 0.7 }}
              className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-700 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
            >
              Harness the power of advanced mining technology to earn
              cryptocurrencies seamlessly and efficiently. Let your assets work
              for you.
            </motion.p>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="block overflow-hidden w-[40vw] min-w-[280px] max-w-[500px] mx-auto"
        >
          <Image
            src={"/our-services-img-2.png"}
            width={500}
            height={500}
            priority
            layout="responsive"
            alt="Our Services Illustration"
            className={`relative `}
          />
        </motion.span>
      </div>
    </section>
  );
}

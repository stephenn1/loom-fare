"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { RiCheckDoubleLine } from "react-icons/ri";

export default function WhyBitcoin() {
  return (
    <section className="pt-20 sm:pt-40 grid layout-spacing">
      <div className="container mx-auto grid lg:grid-cols-[auto_1fr] items-center gap-10 sm:gap-20 lg:gap-10 xl:gap-20">
        <div className="grid gap-5 sm:gap-10 order-1 lg:order-none">
          <div className="grid gap-3 sm:gap-5">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={` mx-auto lg:mx-0 w-max text-3xl lg:text-5xl text-center lg:text-left font-bold text-primary relative transition-all duration-500`}
            >
              Why Bitcoin(BTC)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-center lg:text-left leading-8 mx-auto lg:mx-0 max-w-xl text-gray-700"
            >
              Bitcoin is a form of digital money that allows people to send,
              receive, and store just like traditional money(like dollars or
              euros).
            </motion.p>
          </div>

          <div className="grid gap-5 sm:gap-10">
            <motion.div
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear" }}
              className="grid grid-cols-[auto_1fr] gap-3"
            >
              <RiCheckDoubleLine className="size-10 text-primary" />
              <div>
                <h4 className=" text-xl font-semibold md:text-2xl text-primary">
                  Security
                </h4>
                <p className="text-gray-700 text-lg sm:text-xl">
                  Transactions are secured by cryptography, making it highly
                  resistant to fraud or hacking.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", delay: 0.3 }}
              className="grid grid-cols-[auto_1fr] gap-3"
            >
              <RiCheckDoubleLine className="size-10 text-primary" />
              <div>
                <h4 className=" text-xl font-semibold md:text-2xl text-primary">
                  Use like money
                </h4>
                <p className="text-gray-700 text-lg sm:text-xl  ">
                  You can use Bitcoin to pay for goods and services worldwide,
                  just like cash.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", delay: 0.5 }}
              className="grid grid-cols-[auto_1fr] gap-3"
            >
              <RiCheckDoubleLine className="size-10 text-primary" />
              <div>
                <h4 className=" text-xl font-semibold md:text-2xl text-primary">
                  Authenticity
                </h4>
                <p className="text-gray-700 text-lg sm:text-xl">
                  It&apos;s easy to verify the authenticity of BTC. Actually,
                  it&apos;s effectively impossible to transact with fake
                  bitcoin, as opposed to many gold scams.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear" }}
          className="relative w-[50vw] min-w-80 max-w-xl mx-auto lg:mx-0 bg rounded-xl grid place-content-center"
        >
          <Image
            src={"/why-bitcoin.svg"}
            width={5000}
            height={500}
            alt="Illustration"
          />
        </motion.span>
      </div>
    </section>
  );
}

import { FAQS } from "@/constants/faqs";
import React from "react";
import FaqItem from "./items";

export default function Faqs() {
  return (
    <section id="faq" className="relative layout-spacing p-20">
      <div className="grid gap-10 sm:gap-20">
        <div className="grid gap-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-center text-lg sm:text-xl max-w-lg mx-auto">
            Below we&apos;ve provided answers to the most frequently asked
            questions.
          </p>
        </div>
        <div className="grid gap-5 max-w-3xl mx-auto">
          {FAQS.map((f, i) => (
            <FaqItem key={i} ans={f.ans} ques={f.ques} />
          ))}
        </div>
      </div>
    </section>
  );
}

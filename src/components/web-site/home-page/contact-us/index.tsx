import React from "react";
import Form from "./form";

export default function ContactUsSection() {
  return (
    <section
      id="contact-us"
      className="relative layout-spacing grid grid-rows-[auto_1fr] content-start gap-10 sm:gap-20 pt-20"
    >
      {/* Title */}
      <div className="grid gap-5">
        <h2 className="text-3xl lg:text-5xl  text-primary text-center font-bold">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center text-lg sm:text-xl max-w-3xl mx-auto">
          Get in touch , let us know how we can help.
        </p>
      </div>

      {/* Form */}
      <Form />
    </section>
  );
}

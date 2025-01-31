"use client";

import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [isContentIntersecting, setIsContentIntersecting] = useState(false);
  const [isImageIntersecting, setIsImageIntersecting] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Content
        if (entry.target.id === "content") {
          entry.isIntersecting
            ? setIsContentIntersecting(true)
            : setIsContentIntersecting(false);
        }
        // Image
        if (entry.target.id === "image") {
          entry.isIntersecting
            ? setIsImageIntersecting(true)
            : setIsImageIntersecting(false);
        }
      });
    });

    imageRef.current && observer.observe(imageRef.current);
    contentRef.current && observer.observe(contentRef.current);
  }, []);

  return (
    <section id="hero" className="relative layout-spacing grid gap-10">
      <div className="grid lg:grid-cols-[1fr_auto] lg:gap-10 items-center overflow-hidden container mx-auto">
        <div
          id="content"
          ref={contentRef}
          className={`grid gap-4 lg:gap-8 overflow-hidden relative transition-all duration-500 order-1 lg:order-none ${
            isContentIntersecting ? "left-0" : "-left-full"
          }`}
        >
          <h2
            className={`grid gap-2 sm:gap-3 text-4xl sm:text-5xl font-bold text-gray-900 text-center lg:text-left`}
          >
            <span>
              The <span className="text-primary">best</span>
            </span>
            <span>Crypto Platform</span>
          </h2>
          <p
            className={`text-lg sm:text-2xl text-center lg:text-left max-w-xl mx-auto lg:mx-0 text-gray-500 sm:leading-[1.7] lg:leading-[1.7] xl:leading-10`}
          >
            Send, receive, trade and invest in Bitcoin and cryptocurrency all in
            one safe and simple Platform.
          </p>
          <Link href={"/sign-up"}>
            <Button
              variant={ButtonVariants.PrimaryFilled}
              className="w-64 mt-4 mx-auto lg:mx-0"
            >
              Get Started Now{" "}
              <Icon type={Icons.ArrowRight} size={16} color="#FFFFFF" />
            </Button>
          </Link>
        </div>

        <span
          id="image"
          ref={imageRef}
          className="block overflow-hidden lg:w-[50vw] min-w-[300px] max-w-[713.77px] mx-auto"
        >
          <Image
            src={"/hero-img.png"}
            width={713.77}
            height={684.38}
            priority
            layout="responsive"
            alt="Prime Futures Pip Logo"
            className={`relative transition-all duration-700 delay-300 ${
              isImageIntersecting ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>
      </div>
    </section>
  );
}

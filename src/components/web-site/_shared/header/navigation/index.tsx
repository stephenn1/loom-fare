"use client";

import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";
import React, { useState } from "react";

const NAVIGATION_SCHEMA = [
  { title: "About Us", url: "#about-us" },
  { title: "Services", url: "#our-services" },
  { title: "Contact Us", url: "#contact-us" },
  { title: "Faq", url: "#faq" },
];

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:grid grid-flow-col gap-10 w-max items-center">
        <div className="grid grid-flow-col gap-5">
          {NAVIGATION_SCHEMA.map((nav, index) => (
            <Link
              key={index}
              href={nav.url}
              className="font-medium text-gray-500 transition-all hover:text-gray-700"
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="grid grid-flow-col gap-5">
          <Link href={"/login"} className="grid">
            <Button variant={ButtonVariants.PrimaryOutlined}>Login</Button>
          </Link>
          <Link href={"/sign-up"} className="grid">
            <Button variant={ButtonVariants.PrimaryFilled}>Sign Up</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <button
        onClick={handleToggleMenu}
        className="grid md:hidden grid-flow-col gap-3 items-center w-max rounded-full text-white"
      >
        <Icon type={Icons.Hamburger} size={32} color="#1fa747" />
      </button>

      {/* Bg */}
      <span
        className={`fixed w-full h-full top-0 left-0 bg-black bg-opacity-30 backdrop-blur-[2px] transition-all ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></span>

      {/* Menu */}
      <div
        className={`bg-white p-5 fixed w-full max-w-xs h-full top-0 grid grid-rows-[auto__auto_1fr_auto_auto] transition-all duration-300 ${
          showMenu ? "right-0" : "-right-full"
        }`}
      >
        <button
          onClick={handleToggleMenu}
          className="bg-primary w-10 h-10 rounded-full grid place-content-center ml-auto"
        >
          <Icon type={Icons.Hamburger} size={20} color="white" />{" "}
        </button>

        <hr className="mt-5" />

        <nav className="grid content-start mt-10 gap-10">
          {NAVIGATION_SCHEMA.map((nav, index) => (
            <Link
              key={index}
              href={nav.url}
              onClick={handleToggleMenu}
              className="text-lg font-semibold"
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        <hr className="mb-5" />

        <div className="grid gap-3">
          <Link href={"/login"} className="grid">
            <Button variant={ButtonVariants.PrimaryOutlined}>Login</Button>
          </Link>
          <Link href={"/sign-up"} className="grid">
            <Button variant={ButtonVariants.PrimaryFilled}> Sign Up</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

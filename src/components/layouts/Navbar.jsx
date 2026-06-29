"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = (
    <>
      <li>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
      </li>

      <li>
        <Link href="#about" onClick={closeMenu}>
          About Me
        </Link>
      </li>

      <li>
        <Link href="#skills" onClick={closeMenu}>
          Skills
        </Link>
      </li>

      <li>
        <Link href="#projects" onClick={closeMenu}>
          Projects
        </Link>
      </li>

      <li>
        <Link href="#contact" onClick={closeMenu}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 left-0 right-0 z-[999] w-full bg-base-100/90 backdrop-blur shadow-md"
    >
      {/* Container */}
      <div className="w-11/12 mx-auto flex items-center justify-between py-3">
        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu */}
          <div className="relative lg:hidden">
            <button
              className="btn btn-ghost btn-sm"
              onClick={toggleMenu}
            >
              ☰
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-12 menu menu-sm bg-base-100 rounded-box shadow-lg w-52 z-50"
                >
                  {navLinks}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Logo */}
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="hidden lg:block rounded-xl"
              priority
            />
          </Link>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 font-medium">
            {navLinks}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center">
          <Image
            src="/assets/letter.png"
            alt="Letter"
            width={30}
            height={30}
            priority
          />
          <p className="text-xl font-bold pl-1">ITU</p>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
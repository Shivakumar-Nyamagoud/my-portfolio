"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-y-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 text-center md:text-left"
        >
          <h1 className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-bradley">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Shivakumar",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6 text-justify mx-auto md:mx-0">
            I’m a passionate Full Stack Web Developer with a knack for building visually appealing and high-performing websites. I specialize in both frontend and backend development, ensuring smooth, responsive, and user-centric experiences. My mission is to transform ideas into intuitive, functional, and engaging digital solutions through thoughtful code and design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-center hover:opacity-90 transition"
            >
              Contact
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 hover:opacity-90 transition"
            >
              <span className="block bg-[#121212] rounded-full px-6 py-2 text-white text-center">
                Resume
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-[#181818] overflow-hidden shadow-lg">
            <Image
              src="/images/projects/me.jpeg"
              alt="Hero image of Shivakumar"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

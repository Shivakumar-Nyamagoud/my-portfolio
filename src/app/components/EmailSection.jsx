"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 my-12 py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute h-72 w-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-3xl top-3/4 -left-10 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Content Section */}
      <div className="z-10">
        <h5 className="text-2xl sm:text-3xl font-bold text-white mb-4">Let&apos;s Connect</h5>
        <p className="text-sm sm:text-base text-[#ADB7BE] mb-6 max-w-md leading-relaxed text-justify">
          I’m currently open to new opportunities. Whether you have a project in mind, a question, or just want to connect — feel free to reach out!
        </p>

        <div className="text-[#ADB7BE] mb-6 space-y-2 text-sm sm:text-base">
          <p><strong>Email:</strong> shivakumarnyamagoud@gmail.com</p>
          <p><strong>Phone:</strong> +91 80503 85397</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 items-center mt-4">
          <Link
            href="https://github.com/shivakumar-nyamagoud"
            target="_blank"
            aria-label="Visit my GitHub"
          >
            <Image
              src={GithubIcon}
              alt="GitHub Icon"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shivakumar-nyamagoud-43a87a328"
            target="_blank"
            aria-label="Visit my LinkedIn"
          >
            <Image
              src={LinkedinIcon}
              alt="LinkedIn Icon"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

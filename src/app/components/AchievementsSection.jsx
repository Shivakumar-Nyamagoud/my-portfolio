"use client";
import React from "react";

const internships = [
  {
    company: "Octanect Pvt Ltd",
    role: "Web Development Intern",
    duration: "Sept 2024 – Nov 2024",
    description:
      "Developed frontend website using HTML, CSS, and JavaScript. Collaborated with designers to implement UI/UX improvements.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-[#0F0F11]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Internship Experience
      </h2>

      <div className="space-y-6">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="bg-[#18191E] border border-[#2C2F36] p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg hover:border-primary-500 transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">
              {intern.role}{" "}
              <span className="text-primary-500">@ {intern.company}</span>
            </h3>

            <p className="text-sm sm:text-base text-gray-400 mb-3">{intern.duration}</p>

            <p className="text-sm sm:text-base text-[#ADB7BE] leading-relaxed text-justify">
              {intern.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

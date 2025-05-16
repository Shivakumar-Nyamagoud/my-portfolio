"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-left">
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Firebase</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>ServiceNow CSA & CAD</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-left">
        <li>SSLC at SHS CKP – 92%</li>
        <li>PUC at Sai Niketan PU College – 94%</li>
        <li>B.E. in Computer Science at DSCE – 8.68 CGPA</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-left">
        <li>ServiceNow CSA (Certified System Administrator)</li>
        <li>ServiceNow CAD (Certified Application Developer)</li>
        <li>Octanet Web Development Internship</li>
        <li>Blitz’24 Hackathon Participant – Student Assistant project</li>
        <li>Dynamic Skills Integrated Program – DSCE</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white bg-[#0F0F11]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-10 py-12 px-4 sm:px-6 lg:px-20 xl:gap-16">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="Illustration of a developer at work"
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Text + Tabs Section */}
        <div className="text-justify flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#ADB7BE] leading-relaxed">
            I’m a Full Stack Web Developer passionate about building interactive,
            responsive, and user-friendly web applications. My stack includes
            JavaScript, React, Node.js, Express, MySQL, HTML, CSS, and Git. I’m
            a quick learner and thrive in team environments, always aiming to
            craft impactful, high-quality solutions.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 ">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 animate-fade-in">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

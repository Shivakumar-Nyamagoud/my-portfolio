"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A simple portfolio website built with React",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Shivakumar-Nyamagoud/my-portfolio.git",
    previewUrl: "https://shivakumar-portfolio-1.netlify.app/",
  },
  {
    id: 2,
    title: "Indian culture showcasing website",
    description: "An informative and descriptive website showcasing Indian culture",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Shivakumar-Nyamagoud/IndianCulture.git",
    previewUrl: "https://shivakumar-nyamagoud.github.io/IndianCulture/",
  },
  {
    id: 3,
    title: "Feedback Collector",
    description: "Simple feedback collector using Next.js",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend", "Backend", "Fullstack"],
    gitUrl: "https://github.com/Shivakumar-Nyamagoud/feedback-collector.git",
    previewUrl: "https://sparkling-sundae-b2a228.netlify.app/",
  },
  {
    id: 4,
    title: "Student assistance system",
    description: "A website to assist students in their studies",
    image: "/images/projects/4.png",
    tag: ["All", "Frontend", "Backend"],
    gitUrl: "https://github.com/Shivakumar-Nyamagoud/StudentAssistence.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tags = ["All", "Frontend", "Backend", "Fullstack"];

  // Filter projects based on selected tag
  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag.includes(selectedTag));

  // Animation variants for cards
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="py-12 px-4 md:px-8 bg-[#0F0F11] text-white"
    >
      <h2 className="text-center text-4xl font-bold mb-8">My Projects</h2>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        {tags.map((tagName) => (
          <ProjectTag
            key={tagName}
            name={tagName}
            isSelected={selectedTag === tagName}
            onClick={() => setSelectedTag(tagName)}
          />
        ))}
      </div>

      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

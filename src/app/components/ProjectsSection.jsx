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
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shivakumar-Nyamagoud/my-portfolio.git",
    previewUrl: "https://shivakumar-portfolio-1.netlify.app/",
  },
  {
    id: 2,
    title: "Indian culture showcasing website",
    description: "A informative and decriptive website showcasing Indian culture",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shivakumar-Nyamagoud/IndianCulture.git  ",
    previewUrl: "https://shivakumar-nyamagoud.github.io/IndianCulture/",
  },
  {
    id: 3,
    title: "Feedback Collector",
    description: "Simple feedback collector using Next",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shivakumar-Nyamagoud/feedback-collector.git",
    previewUrl: "https://sparkling-sundae-b2a228.netlify.app/",
  },
  {
    id: 4,
    title: "Student assistance system",
    description: "A website to assist students in their studies",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Shivakumar-Nyamagoud/StudentAssistence.git",
    previewUrl: "/",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects =
    tag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Example Tags: ["All", "Frontend", "Backend", "Fullstack"]
  const tags = ["All", "Frontend", "Backend", "Fullstack"];

  return (
    <section id="projects" className="py-12 px-4 md:px-8">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        {tags.map((tagName) => (
          <ProjectTag
            key={tagName}
            name={tagName}
            isSelected={tag === tagName}
            onClick={handleTagChange}
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
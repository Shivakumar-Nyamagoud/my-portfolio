import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] bg-[#181818]">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center gap-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Source Code"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Live Project"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="py-6 px-4">
        <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[#121212]/90 backdrop-blur-md flex flex-col items-center justify-center z-40 animate-fadeIn">
      <ul className="space-y-6 text-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;

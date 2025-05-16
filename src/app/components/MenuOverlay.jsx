import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#121212]/90 backdrop-blur-md flex flex-col items-center justify-center z-40 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-70 transition"
      >
        &times;
      </button>
      <ul className="space-y-6 text-center text-xl font-semibold">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} onClick={onClose} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;

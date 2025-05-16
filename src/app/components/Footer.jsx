import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#0F0F11] border-t border-[#33353F] text-white z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
        <span className="text-sm sm:text-base font-semibold">
          SHIVAKUMAR NYAMAGOUD
        </span>
        <p className="text-xs text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

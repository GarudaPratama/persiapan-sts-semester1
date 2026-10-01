import React from "react";
import { NavLink } from "react-router";

function navbar() {
  return (
    <div className="flex items-center justify-center gap-3 p-2 my-6 mx-auto max-w-fit bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-full shadow-lg shadow-slate-200/50 sticky top-4 z-50">
      <NavLink
        to="/"
        className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-[#112352] hover:bg-slate-100/80 transition-all duration-300 [&.active]:bg-[#112352] [&.active]:text-white [&.active]:shadow-md"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-[#112352] hover:bg-slate-100/80 transition-all duration-300 [&.active]:bg-[#112352] [&.active]:text-white [&.active]:shadow-md"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-[#112352] hover:bg-slate-100/80 transition-all duration-300 [&.active]:bg-[#112352] [&.active]:text-white [&.active]:shadow-md"
      >
        Contact
      </NavLink>
    </div>
  );
}

export default navbar;

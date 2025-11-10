import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="h-28 w-full bg-neutral-200 border-b ">
      <div className="flex items-center justify-between h-full w-full px-16 ">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">PolyHedge</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 border px-8 py-4 rounded-4xl bg-white">
          <li className="text-md font-black text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            Platform
          </li>
          <li className="text-md font-black text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            Solutions
          </li>
          <li className="text-md font-black text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            Use Cases
          </li>
          <li className="text-md font-black text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            Resources
          </li>
          <li className="text-md font-black text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            Plans
          </li>
          <li className="text-md font-black text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            Partnership
          </li>
          <li className="text-md font-black text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            Company
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* <Button variant="ghost" size="sm">
            Login
          </Button> */}
          <Button size="lg" className="">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}

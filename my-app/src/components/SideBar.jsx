import React from "react";
import Image from "next/image";
import jee from "../../public/assets/jee.svg"
import { subjectsData } from "@/lib/constants";

import Para from "./Para";
import ArrowRight from "./ArrowRight";
import DarkModeToggle from "./DarkModeToggle";

const SideBar = ({ selectedSubject, onSelect }) => {
  return (
    <aside   className="w-full md:w-80 p-4 bg-background 
    border-b md:border-r 
    fixed top-0 z-20 md:sticky md:h-screen 
    md:top-0 overflow-y-auto 
    flex flex-col"
    >
        <div className="flex flex-col gap-4 justify-center items-center pt-6 pb-6">
                <div className="flex justify-center items-center gap-4">
                    <Image 
                        src={jee}
                        alt="jee-logo"
                    />
                    <h2 className="text-xl font-bold">JEE Mains</h2>
                </div>
            <Para className="text-accent">
                2025 - 2009 | 173 Papers | 15825 Qs
            </Para>
        </div>

      <div className="flex flex-row md:flex-col md:space-y-4 w-full">
        {subjectsData.map((subject, idx) => {
          return (
            <div
            key={idx}
           className={`flex flex-col md:flex-row items-center justify-between w-full px-4 py-2 rounded-none md:rounded-lg
                ${
                  selectedSubject === subject.subjectName
                    ? "border-b-2 border-[#1D2933] md:bg-[#1D2933] md:text-white md:border-none"
                    : "bg-background text-muted-foreground"
                }`}
            >
            {/* Left part: Icon + Name */}
            <div className="flex flex-col md:flex-row items-center gap-x-3 flex-1">
                <Image
                src={subject.subjectIcon}
                alt={`${subject.subjectName} icon`}
                width={24}
                height={24}
                />
                <button
                onClick={() => onSelect(subject.subjectName)}
                className="text-left w-full"
                >
                {subject.subjectName}
                </button>
            </div>

            {/* Right Arrow */}
            <ArrowRight
                className={`hidden md:block w-5 h-5 ${
                selectedSubject === subject.subjectName ? "text-white" : "text-foreground"
                }`}
            />
        </div>

          );
        })}
      </div>
        <div className="flex justify-start items-start mt-auto pt-6">
          <DarkModeToggle/>
        </div>
    </aside>
  );
};

export default SideBar;

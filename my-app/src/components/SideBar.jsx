import React from "react";
import Image from "next/image";
import jee from "../../public/assets/jee.svg"
import { subjectsData } from "@/lib/constants";

import Para from "./Para";
import ArrowRight from "./ArrowRight";

const SideBar = ({ selectedSubject, onSelect }) => {
  return (
    <aside className="w-64 p-4 pr-4 bg-white border-r sticky top-0 h-screen overflow-y-auto">
        <div className="flex flex-col gap-4 justify-center items-center pt-6 pb-6">
                <div className="flex justify-center items-center gap-4">
                    <Image 
                        src={jee}
                        alt="jee-logo"
                    />
                    <h2 className="text-xl font-bold">JEE Mains</h2>
                </div>
            <Para className="text-[#505D79]">
                2025 - 2009 | 173 Papers | 15825 Qs
            </Para>
        </div>

      <div className="space-y-4">
        {subjectsData.map((subject, idx) => {
          return (
            <div
            key={idx}
            className={`flex items-center justify-between w-full px-4 py-2 rounded-lg ${
                selectedSubject === subject.subjectName
                ? "bg-[#1D2933] text-white"
                : "bg-white text-muted-foreground"
            }`}
            >
            {/* Left part: Icon + Name */}
            <div className="flex items-center gap-x-3 flex-1">
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
                className={`w-5 h-5 ${
                selectedSubject === subject.subjectName ? "text-white" : "text-black"
                }`}
            />
        </div>

          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;

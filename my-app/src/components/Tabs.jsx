import React from "react";
import Image from "next/image";
import { CaretDown } from "@phosphor-icons/react";
import Para from "./Para";

const Tabs = ({
  filters,
  activeFilter,
  onFilterChange,
  classes,
  selectedClass,
  onClassChange,
  units,
  selectedUnit,
  onUnitChange,
  chapterCount
}) => {
  return (
    <div className="flex flex-col flex-wrap gap-2 pb-4 items-start w-full">
      <div className="flex justify-between items-center w-full">
        <Para>Showing all chapters ({chapterCount})</Para>
        <Image 
            src="/assets/sort.svg" 
            alt="sort" 
            width={48}
            height={48}
        />
      </div>
      <div className="flex flex-wrap gap-2 pb-4 justify-start items-start">
      {filters.map((filter) => {
        if (filter === "Class") {
          return (
            <div className="relative inline-block w-max">
                <select
                  key={filter}
                  value={selectedClass}
                  onChange={(e) => {
                    onFilterChange(filter);
                    onClassChange(e.target.value);
                  }}
                  className="appearance-none p-1.5 pr-8 rounded-lg border-2 text-sm text-gray-700 bg-white"
                >
                  <option value="">Select Class</option>
                  {classes.map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
                <CaretDown
                    size={16}
                    className="pointer-events-none text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2"
                />
            </div>
          );
        } else if (filter === "Units") {
          return (
            <div className="relative inline-block w-max">
            <select
              key={filter}
              value={selectedUnit}
              onChange={(e) => {
                onFilterChange(filter);
                onUnitChange(e.target.value);
              }}
              className="appearance-none p-1.5 pr-8 rounded-lg border-2 text-sm text-gray-700 bg-white"
            >
              <option value="">Units</option>
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
                <CaretDown
                    size={16}
                    className="pointer-events-none text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2"
                />
            </div>
          );
        } else {
        const isWeakChapters = filter === "Weak Chapters";

        return (
            <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`
                relative p-[1.5px] rounded-lg text-sm transition-all duration-150
                ${isWeakChapters ? "bg-gradient-to-r from-gray-200 to-orange-400" : "border-2 border-gray-200"}
            `}
            >
            <span
                className={`
                block rounded-md px-3 py-1
                ${activeFilter === filter ? "bg-[#1D2933] text-white" : "bg-white text-gray-600"}
                `}
            >
                {filter}
            </span>
            </button>
        );
        }

      })}
      </div>
    </div>
  );
};

export default Tabs;

'use client';
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { subjectsData } from "@/lib/constants";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import Para from "@/components/Para";
import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
import { data } from "@/data/data.js";


export default function Home() {

  const myData = data;
  console.log("my data ", data);

  const [selectedSubject, setSelectedSubject] = useState("Physics");
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const filters = ["Class", "Units", "Not Started", "Weak Chapters"];

  const selectedSubjectData = subjectsData.find(
    (subject) => subject.subjectName === selectedSubject
  );

  const classes = useMemo(() => {
    return [...new Set(myData.filter(i => i.subject === selectedSubject).map(i => i.class))];
  }, [selectedSubject]);

  const units = useMemo(() => {
    return [...new Set(myData
      .filter(i => i.subject === selectedSubject && (!selectedClass || i.class === selectedClass))
      .map(i => i.unit)
    )];
  }, [selectedSubject, selectedClass]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }
  const handleClassChange = (value) => {
    setSelectedClass(value);
  };
  const handleUnitChange = (value) => {
    setSelectedUnit(value);
  };
  
  // subject filtering
  let filteredChapters = data.filter(
    (item) => item.subject === selectedSubject
  );
  
  //tab-based filtering 
  if (activeFilter === "Not Started") {
    filteredChapters = filteredChapters.filter(item => item.status === "Not Started");
  } else if (activeFilter === "Weak Chapters") {
    filteredChapters = filteredChapters.filter(item => item.isWeakChapter);
  } else if (activeFilter === "Class" && selectedClass) {
    filteredChapters = filteredChapters.filter(item => item.class === selectedClass);
  } else if (activeFilter === "Units" && selectedUnit) {
    filteredChapters = filteredChapters.filter(item => item.unit === selectedUnit);
  }


  return (
     <div className="flex flex-col md:flex-row min-h-screen bg-background">
        <SideBar
        selectedSubject={selectedSubject}
        onSelect={setSelectedSubject}
        />
      <div className="flex flex-1 flex-col items-center border-r border-gray-200">
        <div className="w-full sticky top-0 z-10 bg-white flex flex-col justify-center items-center border-b">
              <div className="hidden md:flex md:flex-col md:justify-center md:items-center">
                <div className="flex justify-between items-center">
                   {selectedSubjectData && (
                    <Image
                      src={selectedSubjectData.subjectIcon}
                      alt={`${selectedSubject} icon`}
                      width={28}
                      height={28}
                    />
                  )}
                <Header selectedSubject={`${selectedSubject} PYQs`} />
                </div>
                <Para className="text-[#505D79] pb-4">
                  Chapter-wise collection of {selectedSubject} PYQ's
                </Para>
              </div>
        </div>
        <div className="flex justify-start items-start w-full px-4 py-3">
          <Tabs
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          classes={classes}
          selectedClass={selectedClass}
          onClassChange={handleClassChange}
          units={units}
          selectedUnit={selectedUnit}
          onUnitChange={handleUnitChange}
          chapterCount={filteredChapters.length}
        />
        </div>
        <div className="w-full px-4">
          <Card subjectSelected={selectedSubject} data={filteredChapters} />
        </div>
      </div>
      <div className="hidden md:block w-30"></div>
    </div>
  );
}
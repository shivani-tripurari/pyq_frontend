import React from "react";
import {
  Book,
  ChalkboardTeacher,
  GraduationCap,
  Atom,
  Cube,
  Brain,
  Globe,
  Code,
  ArrowUpIcon,
  ArrowDownIcon,
} from  "@phosphor-icons/react";

const icons = [Book, ChalkboardTeacher, GraduationCap, Atom, Cube, Brain, Globe, Code];

const Card = ({subjectSelected, data}) => {

    const filteredChapters = data.filter(
        (chapter) => chapter.subject === subjectSelected
    );
    console.log("filtered ", filteredChapters);

    return (
        <div className="space-y-4">
            {filteredChapters.map((item, idx) => {
                const IconComponent = icons[idx % icons.length];
                  const colorClasses = [
                    "text-red-500",
                    "text-blue-500",
                    "text-green-500",
                    "text-yellow-500",
                    "text-purple-500",
                    "text-pink-500",
                    "text-indigo-500",
                    "text-emerald-500",
                ];
                const iconColor = colorClasses[idx % colorClasses.length];

                return (
                <div
                key={idx}
                className="p-4 rounded-md border-2 bg-white flex flex-grow justify-between items-center gap-2"
                >
                    <div className="flex justify-center items-center gap-3">
                        {/* random icons from phosphor icons */}
                        <IconComponent size={24} className={iconColor}/>
                        <h3 className="text-base font-semibold">{item.chapter}</h3>
                    </div>
                    <div className="flex jusrify-center items-center gap-1">
                    <div className="text-sm text-muted-foreground ">
                             {Object.entries(item.yearWiseQuestionCount)
                            .sort(([a], [b]) => Number(b) - Number(a)) 
                            .slice(0, 2) 
                            .map(([year, count], index, arr) => {
                                let nextYearCount = null;
                                if (index + 1 < arr.length) {
                                nextYearCount = arr[index + 1][1];
                                }
                                let Arrow = null;
                                if (nextYearCount !== null) {
                                if (count > nextYearCount) {
                                    Arrow = <ArrowUpIcon size={16} className="inline text-green-600 ml-1" />;
                                } else if (count < nextYearCount) {
                                    Arrow = <ArrowDownIcon size={16} className="inline text-red-600 ml-1" />;
                                }
                                }
                            return( 
                            <span key={year} className="mr-2">
                                {year}: {count} Q's {Arrow}
                                {index !== arr.length - 1 && (
                                    <span className="mx-2 text-gray-400">|</span>
                                )}
                            </span>
                            )
                            })}
                    </div>
                     <span className="text-gray-300">|</span>
                    <div className="text-sm text-gray-500">
                        <p>{item.questionSolved}/205 Q's</p>
                    </div>
                    </div>
                </div>
                )
                })}
        </div>
    )
}
export default Card;
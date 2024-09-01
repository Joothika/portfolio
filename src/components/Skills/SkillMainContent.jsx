import React from "react";
import HTMLICON from "../../assets/skills/html-icon.png";
import { skillContent } from "../../utils/constants";

const SkillMainContent = () => {
  return (
    <main className="my-10 mx-4 md:mx-10">
      <ul className="grid grid-cols-12 justify-items-center  md:gap-x-8 gap-x-5 gap-y-9 md:gap-y-10">
        {skillContent?.map((skill) => (
          <li className="col-span-6 sm:col-span-4  xl:col-span-2  lg:col-span-3 rounded-md bg-black shadow-lg shadow-purple-500/5 justify-center flex flex-col items-center py-8 sm:py-10 w-36 sm:w-40 lg:px-12">
            <img src={skill?.icon} className="w-10 h-10 md:w-12 md:h-12" />
            <h3 className="text-grayColor mt-3">{skill?.text}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
};

export { SkillMainContent };

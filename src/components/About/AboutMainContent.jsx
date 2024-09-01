import React from "react";
import { aboutContent } from "../../utils/constants";
import { Description, AboutCard } from "../../utils/Export";

const AboutMainContent = () => {
  return (
    <main className="mx-4 justify-items-center md:justify-items-stretch my-4 md:my-0 md:mx-12 grid grid-rows-3  md:grid-rows-12  md:h-[70vh] gap-y-10 md:gap-y-14">
      <Description addCSS={`block md:hidden text-[0.9rem]`} />
      <Description
        addCSS={`hidden md:block md:row-span-4 text-sm lg:text-lg xl:text-lg lg:py-7  lg:px-8 md:py-7 xl:px-10 xl:py-10 lg:leading-8 xl:leading-9 `}
      />

      <div className="hidden md:block  md:h-full md:row-span-8  xl:mx-8">
        <div className="grid grid-cols-3 h-full lg:gap-x-12 md:gap-x-4 ">
          {aboutContent?.map((aboutContent) => (
            <AboutCard
              aboutContent={aboutContent}
              addMainCSS={`col-span-1 h-[17rem] lg:h-[20rem] justify-center`}
              addSchoolCSS={`text-xs lg:text-sm`}
              degreeCSS={`text-xs lg:text-sm`}
            />
          ))}
        </div>
      </div>
      {aboutContent?.map((aboutContent) => (
        <AboutCard
          aboutContent={aboutContent}
          addMainCSS={`row-span-1 md:hidden md:h-full mx-16 py-4 w-56 `}
        />
      ))}
    </main>
  );
};

export { AboutMainContent };

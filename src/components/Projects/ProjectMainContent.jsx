import React from "react";
import HOTFLIXGPT from "../../assets/projects/hotfixgpt-poster.png";
import { projectContent, projectLink } from "../../utils/constants";
import { GridContainer } from "../../utils/GridContainer";

const ProjectMainContent = () => {
  return (
    <GridContainer
      addCSS={`gap-x-8 sm:gap-x-10 xl:gap-x-8 gap-y-7 sm:gap-y-5 md:gap-y-4 mx-4`}
    >
      {projectContent?.map((content, i) => (
        <li className="row-span-12 sm:col-span-6  xl:p-8  ">
          <img src={content?.img} className="rounded-md lg:rounded-lg w-full" />
          <div className="flex justify-between items-center lg:px-6  py-4">
            <div className="flex flex-col">
              <h1 className="text-white text-lg tracking-wide">
                {content?.title}
              </h1>
              <small className="text-grayColor mt-1 text-sm">
                {content?.subtitle}
              </small>
            </div>
            <div className="flex ">
              {i == 0 ? (
                ""
              ) : (
                <a href={content?.link} target="_blank">
                  <img src={projectLink?.linkIcon} className="w- h-8" />
                </a>
              )}
              <a href={content?.gitlink} target="_blank">
                <img src={projectLink?.gitIcon} className="w- h-8 ml-4" />
              </a>
            </div>
          </div>
        </li>
      ))}
    </GridContainer>
  );
};

export { ProjectMainContent };

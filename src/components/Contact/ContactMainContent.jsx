import React from "react";
import { contactContent } from "../../utils/constants";

const ContactMainContent = () => {
  return (
    <main className="grid grid-row-12 mx-10 justify-items-center  lg:mx-16 my-8 md:my-4  md:mx-12 h-[50vh] gap-y-8 md:gap-y-10 md:justify-items-start">
      {contactContent?.map((content) => (
        <div className="crow-span-4  bg-contactColor rounded-md  flex flex-col  md:justify-start items-center md:flex-row md:items-center px-10 py-6 md:py-0 w-72 md:w-full">
          <img src={content?.img} className="w-10 h-10" />
          <h1 className="text-white text-sm lg:text-lg ml-6 mt-3 md:mt-0  tracking-wide">
            {content?.text}
          </h1>
        </div>
      ))}
    </main>
  );
};

export { ContactMainContent };

import React from "react";
import { links } from "./constants";

export const Links = ({ homepage }) => {
  return (
    <aside
      className={`flex flex-col items-end  absolute right-2 top-2 md:top-6 mt-6`}
    >
      {links?.map((eachLink) => (
        <a
          href={eachLink.link}
          target="_blank"
          className="mb-3 md:mb-4 hover:shadow-md hover:shadow-purple-500"
        >
          <img src={eachLink.icon} className="w-7 h-7 lg:w-8 lg:h-8 " />
        </a>
      ))}
    </aside>
  );
};

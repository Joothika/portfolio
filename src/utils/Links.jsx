import React from "react";
import { links } from "./constants";
import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <aside className="flex flex-col items-end mt-12 absolute right-2 top-6">
      {links?.map((eachLink) => (
        <a
          href={eachLink.link}
          target="_blank"
          className="mb-4 hover:shadow-md hover:shadow-purple-500"
        >
          <img src={eachLink.icon} className=" w-9 h-9 " />
        </a>
      ))}
    </aside>
  );
};

import React from "react";
import { PASSION } from "./constants";
import { Links } from "./Links";

const Header = ({ page, heading }) => {
  return (
    <header className="flex justify-between ml-10 mr-2  items-center">
      <h1
        className={`text-white   font-poetsen text-2xl md:block ${
          page ? `hidden my-14` : "my-10 md:my-14"
        } `}
      >
        {page ? PASSION : heading}
      </h1>
      <Links homepage />
    </header>
  );
};

export { Header };

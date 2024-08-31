import React from "react";
import { PASSION } from "../../utils/constants";
import { Links } from "../../utils/Links";

const Header = () => {
  return (
    <header className="flex justify-between ml-10 mr-2  items-center">
      <h1 className="text-white  my-14 font-driod text-2xl hidden md:block">
        {PASSION}
      </h1>
      <Links />
    </header>
  );
};

export { Header };

import React from "react";
import { aboutDescription } from "../../utils/constants";

const Description = ({ addCSS }) => {
  return (
    <>
      <div
        className={`rounded-sm  border border-shadowColor/20 shadow-md shadow-shadowColor/20 h-52 md:h-full text-grayColor text-center leading-7 bg-aboutColor tracking-wide py-5 px-6 mx-6 md:mx-0 ${addCSS} `}
      >
        {aboutDescription}
      </div>
    </>
  );
};

export { Description };

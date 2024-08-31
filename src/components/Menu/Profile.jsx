import React from "react";
import PROFILE from "../../assets/profile-pic.png";
import { NAME, ROLE } from "../../utils/constants";

const Profile = ({ breakpoint }) => {
  return (
    <figure
      className={`flex flex-col items-center my-10 ${
        breakpoint ? "hidden md:flex" : "md:hidden"
      }`}
    >
      <img
        src={PROFILE}
        className="rounded-full w-24 h-24  md:w-20 md:h-20 object-cover object-left-top"
      />
      <figcaption className="text-white font-poetsen text-xl md:text-xl lg:text-2xl my-1">
        {NAME}
      </figcaption>
      <small className=" font-driod text-sm md:text-[0.65rem] lg:text-xs  tracking-wide text-grayColor">
        {ROLE}
      </small>
    </figure>
  );
};

export { Profile };

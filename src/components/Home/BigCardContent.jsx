import React from "react";
import { Link } from "react-router-dom";

export const BigCardContent = ({ content }) => {
  return (
    <>
      <span> {content?.head}</span>
      <img src={content?.img} className="px-8 py-10" />
      <Link
        className="text-redColor text-[1.2rem] flex justify-center items-center"
        to={content?.path}
      >
        {content?.linkText}
        <img src={content?.linkIcon} className="w-6 h-3 ml-2" />
      </Link>
    </>
  );
};

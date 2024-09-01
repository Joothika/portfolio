import React, { useRef } from "react";
import { menuContent } from "../../utils/constants";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="mx-6 md:mx-14 lg:mx-20 xl:mx-16 md:my-14 flex justify-between md:block my-6 ">
      {menuContent?.map((menu) => {
        return (
          <NavLink to={menu?.path}>
            <li className="flex md:flex-row flex-col items-center md:items-end md:mb-6">
              <img
                src={menu.icon}
                className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6"
              />
              <h5 className="font-driod text-white md:ml-3 text-xs  lg:text-sm tracking-wide hidden md:block">
                {menu.text}
              </h5>
            </li>
          </NavLink>
        );
      })}
    </ul>
  );
};

export { Menu };

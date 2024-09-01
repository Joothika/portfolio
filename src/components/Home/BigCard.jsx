import React from "react";
import { bigCardContent } from "../../utils/constants";
import { BigCardContent } from "../../utils/Export";
import ARROWICON from "../../assets/arrow-icon.png";

export const BigCard = () => {
  return (
    <section className="row-span-1  md:col-span-5 lg:col-span-6 xl:col-span-7 rounded-md z-[2] ">
      <ul className="grid grid-row-12  xl:grid-cols-2 gap-y-10 lg:gap-x-8 md:h-full h-96">
        <li className="row-span-6 xl:hidden  rounded-md bg-black shadow-lg  md:h-full text-center py-10 text-xl leading-9 text-grayColor tracking-wide  h-max">
          <BigCardContent key={"big-card-0"} content={bigCardContent[0]} />
        </li>
        <li className="row-span-6 md:hidden  rounded-md bg-black shadow-lg text-center py-10 text-xl leading-9 text-grayColor tracking-wide h-max">
          <BigCardContent
            key={"big-card-certify-1"}
            content={bigCardContent[1]}
          />
        </li>

        {bigCardContent?.map((bigCard, i) => (
          <li className="hidden xl:block xl:col-span-1   rounded-md bg-black shadow-lg  text-center py-10 text-xl leading-9 text-grayColor tracking-wide ">
            <BigCardContent key={i} content={bigCard} />
          </li>
        ))}
      </ul>
    </section>
  );
};

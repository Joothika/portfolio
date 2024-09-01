import React from "react";
import { smallCardContent } from "../../utils/constants";

export const SmallCard = () => {
  return (
    <section className="row-span-1 md:col-span-7 lg:col-span-6 xl:col-span-5 z-[2] h-96 md:h-full">
      <ul className="grid grid-cols-2 grid-rows-2 h-full gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-8 xl:gap-x-8  xl:gap-y-12">
        {smallCardContent?.map((content, i) => (
          <li
            className="col-span-1 row-span-1  rounded-md bg-black drop-shadow-xl text-white text-[1rem] xl:text-lg px-8 sm:px-24  xl:px-12 md:px-6 lg:px-10 text-center py-12 flex justify-center items-center font-driod lg:leading-8 xl:leading-9 leading-7"
            key={`small-${i}`}
          >
            <span
              className={
                i == 0 &&
                `first-line:md:text-4xl first-line:text-3xl text-grayColor first-line:text-white md:text-[1rem]`
              }
            >
              {content}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

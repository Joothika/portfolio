import React from "react";
import { BigCard, SmallCard } from "../../utils/Export";

const HomeMainContent = () => {
  return (
    <main className="grid z-1 grid-row-2 gap-y-10 md:grid-cols-12 gap-x-6 md:gap-x-8 lg:gap-x-6 xl:gap-x-10 md:my-12 lg:my-10 mb-[33rem]  md:mb-0  mx-6 md:mx-8 lg:mx-8 xl:mx-16 md:h-[53vh] lg:h-[60vh] before:bg-gradient-to-r from-purple-500 via-purple-500  to-purple-600 before:absolute before:px-20  before:xl:px-30 before:blur-2xl before:h-32 before:top-[40%] before:md:top-[40%] before:md:left-[40%] before:left-[30%] before:xl:left-[30%] before:z-[1] before:shadow-2xl before:shadow-purple-600 after:bg-gradient-to-r after:from-purple-700 after:via-purple-500  after:to-purple-600 after:absolute after:px-20  after:lg:px-40 after:xl:px-56   after:blur-2xl after:h-[40rem] after:md:h-32 after:top-[75%] after:left-[30%]  after:md:top-[40%] after:md:left-[70%] after:lg:left-[60%] after:xl:left-[52%] after:z-[1] after:shadow-xl after:shadow-purple-600">
      <SmallCard />
      <BigCard />
    </main>
  );
};

export { HomeMainContent };

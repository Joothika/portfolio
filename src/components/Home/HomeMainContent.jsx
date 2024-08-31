import React from "react";

const HomeMainContent = () => {
  return (
    <main className="grid z-1 grid-row-2 gap-y-10 md:grid-cols-12 gap-x-6 md:gap-x-8 lg:gap-x-6 xl:gap-x-10 md:my-12 lg:my-10 mb-[10rem]  mx-12 md:mx-8 lg:mx-8 xl:mx-16 md:h-[53vh] lg:h-[60vh] before:bg-gradient-to-r from-purple-500 via-purple-500  to-purple-600 before:absolute before:px-36  before:lg:px-96 before:blur-2xl before:h-32 before:top-[50%] before:left-[50%] before:lg:left-[31%]  before:z-[1] before:shadow-2xl before:shadow-purple-600 after:bg-gradient-to-r after:from-purple-400 after:via-purple-500  after:to-purple-600 after:absolute after:lg:px-40 after:blur-2xl after:h-32 after:top-[50%] after:left-[70%]  after:z-[1] after:shadow-2xl after:shadow-purple-600">
      <section className="row-span-1 md:col-span-7 lg:col-span-6 xl:col-span-5 z-[2] h-96 md:h-full">
        <ul className="grid grid-cols-2 grid-rows-2 h-full gap-x-10 gap-y-10 md:gap-x-6 md:gap-y-8 xl:gap-x-8  xl:gap-y-12">
          <li className="col-span-1 row-span-1  rounded-md bg-black drop-shadow-xl "></li>
          <li className="col-span-1 row-span-1  rounded-md bg-black shadow-lg"></li>
          <li className="col-span-1 row-span-1  rounded-md bg-black shadow-lg"></li>
          <li className="col-span-1 row-span-1  rounded-md bg-black shadow-lg"></li>
        </ul>
      </section>
      <section className="row-span-1 border md:col-span-5 lg:col-span-6 xl:col-span-7 rounded-md z-[2]">
        <ul className="grid grid-row-12  xl:grid-cols-2 gap-y-4 lg:gap-x-8 md:h-full">
          <li className="row-span-12 xl:hidden  rounded-md bg-black shadow-lg"></li>
          <li className="hidden xl:block xl:col-span-1   rounded-md bg-black shadow-lg"></li>
          <li className="hidden xl:block xl:col-span-1  rounded-md bg-black shadow-lg"></li>
        </ul>
      </section>
    </main>
  );
};

export { HomeMainContent };

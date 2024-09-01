import React from "react";
import { MenuContainer } from "../utils/Export";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <main className="md:grid grid-rows-2 md:grid-cols-12 md:h-screen ">
      <aside className="xl:col-span-2 lg:col-span-3 md:col-span-3  bg-black md:h-screen row-span-1 order-2 md:order-1  fixed bottom-0 h-20 w-full z-[4] md:sticky">
        <MenuContainer />
      </aside>
      <main
        className={`xl:col-span-10 lg:col-span-9 md:col-span-9 bg-pageColor md:h-screen row-span-1 order-1 md:order-2 md:overflow-y-scroll pb-[8rem]`}
      >
        <Outlet />
      </main>
    </main>
  );
};

export { MainPage };

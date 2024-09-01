import React from "react";

const GridContainer = ({ children, addCSS }) => {
  return (
    <main className="mx-8 sm:mx-10 my-4 md:my-0 ">
      <ul className={`grid grid-rows-12 sm:grid-cols-12 xl:gap-y-0 ${addCSS}`}>
        {children}
      </ul>
    </main>
  );
};

export { GridContainer };

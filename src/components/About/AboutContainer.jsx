import React from "react";
import { Header } from "../../utils/Header";
import { aboutHead } from "../../utils/constants";
import { AboutMainContent } from "../../utils/Export";

const AboutContainer = () => {
  return (
    <section>
      <Header heading={aboutHead} />
      <AboutMainContent />
    </section>
  );
};

export { AboutContainer };

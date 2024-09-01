import React from "react";
import { Header } from "../../utils/Header";
import { skillHead } from "../../utils/constants";
import { SkillMainContent } from "../../utils/Export";

const SkillsContainer = () => {
  return (
    <section>
      <Header heading={skillHead} />
      <SkillMainContent />
    </section>
  );
};

export { SkillsContainer };

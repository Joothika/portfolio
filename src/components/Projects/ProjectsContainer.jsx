import React from "react";
import { Header } from "../../utils/Header";
import { projectHead } from "../../utils/constants";
import { ProjectMainContent } from "../../utils/Export";

const ProjectsContainer = () => {
  return (
    <section>
      <Header heading={projectHead} />
      <ProjectMainContent />
    </section>
  );
};

export { ProjectsContainer };

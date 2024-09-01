import React from "react";
import { GridContainer } from "../../utils/GridContainer";
import { certificationContent } from "../../utils/constants";

const CertificationsMainContent = () => {
  return (
    <GridContainer addCSS={`gap-y-5 mx-8`}>
      {certificationContent?.map((content) => (
        <li className="row-span-12 sm:col-span-6 xl:p-8 ">
          <img
            src={content}
            className="rounded-sm lg:rounded-md shadow-purple-300/10 shadow-xl "
          />
        </li>
      ))}
    </GridContainer>
  );
};

export { CertificationsMainContent };

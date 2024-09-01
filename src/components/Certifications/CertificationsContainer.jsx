import React from "react";
import { Header } from "../../utils/Header";
import { certifyHead } from "../../utils/constants";
import { CertificationsMainContent } from "../../utils/Export";

const CertificationsContainer = () => {
  return (
    <section>
      <Header heading={certifyHead} />
      <CertificationsMainContent />
    </section>
  );
};

export { CertificationsContainer };

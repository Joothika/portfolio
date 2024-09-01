import React from "react";
import { Header } from "../../utils/Header";
import { contactHead } from "../../utils/constants";
import { ContactMainContent } from "../../utils/Export";

const ContactContainer = () => {
  return (
    <section className="h-[80vh]">
      <Header heading={contactHead} />
      <ContactMainContent />
    </section>
  );
};

export { ContactContainer };

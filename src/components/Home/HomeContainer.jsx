import React from "react";
import { Header, HomeMainContent, Profile } from "../../utils/Export";

const HomeContainer = () => {
  return (
    <section>
      <Profile />
      <Header page />
      <HomeMainContent />
    </section>
  );
};

export { HomeContainer };

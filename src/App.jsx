import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MainPage,
  HomePage,
  SkillsPage,
  ProjectPage,
  CertificationsPage,
  AboutPage,
  ContactPage,
} from "../src/utils/Export";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/skills",
          element: <SkillsPage />,
        },
        {
          path: "/project",
          element: <ProjectPage />,
        },
        {
          path: "/certification",
          element: <CertificationsPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;

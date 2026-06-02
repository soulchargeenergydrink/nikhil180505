import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ComebackCoffee from "../pages/ComebackCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "coffee",
        element: <ComebackCoffee />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
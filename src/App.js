import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage";
import CreatePetitionPage from "./pages/CreatePetitionPage/CreatePetitionPage";

import "./main.scss";
import AboutPage from "./pages/AboutPage/AboutPage";
import PetitionPage from "./pages/PetitionPage/PetitionPage";
import CategoriesPage from "./pages/CreatingPetition/CategoriesPage/CategoriesPage";
import PetitionTitle from "./pages/CreatingPetition/PetitionTitle/PetitionTitle";
import PetitionPhoto from "./pages/CreatingPetition/PetitionPhoto/PetitionPhoto";
import PetitionBody from "./pages/CreatingPetition/PetitionBody/PetitionBody";
import PetitionSolution from "./pages/CreatingPetition/PetitionSolution/PetitionSolution";
import PetitionEnd from "./pages/CreatingPetition/PetitionEnd/PetitionEnd";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/petition_page",
        element: <PetitionPage />,
      },
      {
        path: "/create-petition",
        element: <CreatePetitionPage />,
      },
      {
        path: "/user-info",
        element: <UserPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/title",
        element: <PetitionTitle />,
      },
      {
        path: "/photo",
        element: <PetitionPhoto />,
      },
      {
        path: "/body",
        element: <PetitionBody />,
      },
      {
        path: "/solution",
        element: <PetitionSolution />,
      },
      {
        path: "/end",
        element: <PetitionEnd />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

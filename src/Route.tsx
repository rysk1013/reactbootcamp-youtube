// src/Route.tsx

import { Navigate, useRoutes } from "react-router-dom";
import { HomeLayout } from "./layouts/Home";
import { SideLessHomeLayout } from "./layouts/SideLessHome";
import { SimpleLayout } from "./layouts/Simple";
import { Home } from "./pages/Home";
import { Upload } from "./pages/Upload";
import { Watch } from "./pages/Watch";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

// <ForgetPassForm>import
import { ForgetPassForm } from "./pages/ForgetPassForm";

export const RootRouter = () => {
  return useRoutes([
    {
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "upload", element: <Upload /> },
      ],
    },

    {
      element: <SideLessHomeLayout />,
      children: [
        { path: "watch", element: <Navigate to="/" /> },
        { path: "watch/:videId", element: <Watch /> },
      ],
    },

    {
      element: <SimpleLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        // <ForgetPassForm>コンポーネントを'/forget'を表示
        { path: "forget", element: <ForgetPassForm /> },
        { path: "404", element: <div>Not Found</div> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
};

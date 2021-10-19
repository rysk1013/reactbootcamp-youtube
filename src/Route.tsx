import { Navigate, useRoutes } from "react-router-dom";
import { HomeLayout } from "./layouts/Home";
import { SideLessHomeLayout } from "./layouts/SideLessHome";
import { SimpleLayout } from "./layouts/Simple";

// 先程のHomeコンポーネントをimport
import { Home } from "./pages/Home";

export const RootRouter = () => {
  return useRoutes([
    {
      element: <HomeLayout />,

      // "element"に<Home />を指定して、URL`/`にアクセスした時にどのコンポーネントを呼び出すか指定します。
      children: [{ path: "/", element: <Home /> }],
    },

    {
      element: <SideLessHomeLayout />,

      children: [
        { path: "watch", element: <Navigate to="/" /> },
        { path: "watch/:videoId", element: <div>watch</div> },
      ],
    },

    {
      element: <SimpleLayout />,
      children: [
        { path: "login", element: <div>ログイン</div> },
        { path: "signup", element: <div>新規作成</div> },
        { path: "forget", element: <div>パスワードリセット</div> },
        { path: "404", element: <div>Not Found</div> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
};

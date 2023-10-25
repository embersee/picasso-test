import { createBrowserRouter } from "react-router-dom";

import { baseLayout } from "./layouts/baseLayout";
import { layoutWithSidebar } from "./layouts/layoutWithSidebar";
import { MainPage } from "../pages/main";
import { PostPage } from "@/pages/post";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,

      children: [
        {
          path: "/post/:postId",
          element: <PostPage />,
        },
      ],
    },
    {
      element: layoutWithSidebar,
      errorElement: <div>error</div>,

      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);

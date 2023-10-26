import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";
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
      element: baseLayout,
      errorElement: <div>error</div>,

      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);

import {  createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import { MainPage } from "@/pages/main";
import { PageNews } from "@/pages/news";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>404</div>,
    children: [
      {path: "/", element: <MainPage />},
      {path: "/news/:id", element: <PageNews />}
    ]
  }
])
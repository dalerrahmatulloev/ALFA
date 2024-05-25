import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout"))
export const Home = lazy(() => import("../pages/home/home"))
export const Film = lazy(() => import("../pages/film/film"))
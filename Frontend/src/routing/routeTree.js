import { createRoute } from "@tanstack/react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login/Login";
import { HomePageRoute } from "./HomePageRoute";
import { AuthPageRoute } from "./AuthPageRoute";
import { DashboardPageRoute } from "./DashboardPageRoute";


export const routeRoute= createRoute({
    component: App
})

export const routeTree= routeRoute.addChildren({
    HomePageRoute,
    AuthPageRoute,
    DashboardPageRoute
})
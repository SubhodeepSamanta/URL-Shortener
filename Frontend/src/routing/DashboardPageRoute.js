import { createRoute } from "@tanstack/react-router";
import { routeRoute } from "./routeTree";
import Dashboard from "../pages/Dashboard";



export const DashboardPageRoute= createRoute({
    getParentRoute: ()=> routeRoute,
    path: "/dashboard",
    component: Dashboard
})
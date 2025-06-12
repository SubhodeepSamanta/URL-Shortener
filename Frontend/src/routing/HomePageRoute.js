import { createRoute } from "@tanstack/react-router";
import { routeRoute } from "./routeTree";
import Home from "../pages/Home";



export const HomePageRoute= createRoute({
    getParentRoute: ()=> routeRoute,
    path: "/",
    component: Home
})
import { createRoute } from "@tanstack/react-router";
import { routeRoute } from "./routeTree";
import Auth from "../pages/Auth";



export const AuthPageRoute= createRoute({
    getParentRoute: ()=> routeRoute,
    path: "/auth",
    component: Auth
})
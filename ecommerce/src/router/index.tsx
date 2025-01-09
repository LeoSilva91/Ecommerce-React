import { RouteObject } from "react-router";
import ViewDashboard from "../views/dashboard/view-dashboard";
import Home from "../views/home/view-home";
import { createBrowserRouter } from "react-router";
import Cart from "../views/cart/view-cart";
import Products from "../views/products/view-products";
import Request from "../views/request/view-request";

export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/requests',
        element: <Request />
    },
    {
        path: '/cart',
        element: <Cart />
    },
];

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <ViewDashboard />,  
        children: appRoutes,
    },
];

const router = createBrowserRouter(routes);

export default router;

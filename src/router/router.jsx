import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.jsx";
import React from "react";

const HomePage = React.lazy(() => import('../pages/HomePage'));
const OrdersPage = React.lazy(() => import('../pages/OrdersPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
                index: true
            },
            {
                path: '/orders',
                element: <OrdersPage/>
            },
        ]
    }
]);

export default router;
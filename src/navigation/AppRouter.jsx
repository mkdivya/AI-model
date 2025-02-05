import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your components
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/',
        element: <AboutUs />,
    },
    
    
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
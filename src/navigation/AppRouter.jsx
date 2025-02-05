import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your components
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
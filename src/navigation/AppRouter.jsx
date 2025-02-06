import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your components
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import TestimonialsSection from "../pages/TestimonialsSection";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/',
        element: <AboutUs />,
    },
    {
        path: '/',
        element: <TestimonialsSection />,
    },
    {
        path: '/',
        element: <ContactUs />,
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
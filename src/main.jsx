import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";

import { Root } from "./Routes/Root.jsx";
import { Home } from "./Routes/Home.jsx";
import { Post } from "./Routes/Post.jsx";
import { Profile } from "./Routes/Profile.jsx";
import { SavedPosts } from "./Routes/SavedPosts.jsx";

import ErrorPage from "./error_page.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/post/:id",
                element: <Post />,
            },
            {
                path: "/profile/:userName",
                element: <Profile />,
            },
            {
                path: "/saves",
                element: <SavedPosts />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

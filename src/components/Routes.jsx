import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Card from "../pages/Card"
import Error from "../pages/Error"

// cette fonction définit les routes,qui vont être appelées dans mon index.js
function Routes() {
    const router = createBrowserRouter([
        { path:"/", element:<Home />, errorElement:<Error /> },
        { path: "/about", element: <About />, errorElement:<Error /> },
        { path: "/apartment", element: <Card />, errorElement:<Error /> },

        // SI les routes ne sont pas trouvées alors elles iront vers errorPage
        { path: "*", element: <Error /> }  
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
        
}

export default Routes
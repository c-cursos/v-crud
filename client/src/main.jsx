

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Appbar from "./views/components/globals/appbar/appbar";
// import Footer from "./views/components/globals/footer/footer";
import Sidebar from "./views/components/globals/sidebar/sidebar";
import Add from "./utils/add";



ReactDOM.createRoot( document.querySelector( "body" ) ).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);

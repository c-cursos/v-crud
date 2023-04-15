

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import Appbar from "../components/appbar";
import Footer from "../components/footer";
import Add from "../utils/add";




ReactDOM.createRoot( document.querySelector( "app" ) ).render(
    <React.StrictMode>
       <App />
    </React.StrictMode>,
);

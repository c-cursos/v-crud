

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Appbar from "../components/globals/appbar/appbar";
// import Footer from "../components/globals/footer/footer";
import Sidebar from "../components/globals/sidebar/sidebar";
import Add from "../utils/add";




// ReactDOM.createRoot( document.querySelector( "app" ) ).render(
//     <React.StrictMode>
//        <App />
//     </React.StrictMode>,
// );
ReactDOM.createRoot( document.querySelector( "app" ) ).render(
    <React.StrictMode>
       <App />
    </React.StrictMode>,
);



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import Appbar from "../components/globals/appbar/appbar";
// import Footer from "../components/globals/footer/footer";
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

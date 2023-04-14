

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Appbar from "../components/appbar";
import Footer from "../components/footer";
import Add from "../components/add";
// import reportWebVitals from "../components/reportWebVitals";




ReactDOM.createRoot( document.querySelector( "app" ) ).render(
    <React.StrictMode>
       <App />
    </React.StrictMode>,
);

// ReactDOM.createRoot( document.querySelector( "add" ) ).render(
//     <React.StrictMode>
//        <Add />
//     </React.StrictMode>,
// );
// reportWebVitals();
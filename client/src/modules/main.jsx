

import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App/App-v";
import App from "./App/Pedro";
import Appbar from "../components/globals/appbar";
import Footer from "../components/globals/footer";
import Add from "../utils/add";




// ReactDOM.createRoot( document.querySelector( "App" ) ).render(
//     <React.StrictMode>
//        <App />
//     </React.StrictMode>,
// );
ReactDOM.createRoot( document.querySelector( "App" ) ).render(
    <React.StrictMode>
       <App />
    </React.StrictMode>,
);

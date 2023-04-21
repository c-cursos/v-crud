

import React from "react";
import ReactDom from "react-dom/client";
import "./appbar.css";


export default function Appbar() {
    return( <>
        <appbar-body>
            <appbar-logo>ceo</appbar-logo>
            <nav>
                <menu>
                    <li>ite 01</li>
                    <li>ite 02</li>
                    <li>ite 03</li>
                </menu>
            </nav>
            <appbar-options>menu</appbar-options>
        </appbar-body>
    </> );
}

ReactDom.createRoot(
    document.querySelector( "appbar" )
).render(
    <Appbar />
);


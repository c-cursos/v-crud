

import React from "react";
import ReactDom from "react-dom/client";
import "./appbar.css";


export default function Appbar() {
    return( <>
        <appbar-body>
            <appbar-logo></appbar-logo>
            <nav>
                <div>
                    <a href="https://www.letsreact.org/" target="_blank" rel="noreferrer"> 
                        <img src="LetsReactLogo-hd.png" alt="logo" />
                    </a>
                    <a href="/">Home</a>
                    <a href="/vite-app/src/views/pagina.html">Página</a>
                </div>
            </nav>
            <appbar-options></appbar-options>
        </appbar-body>
    </> );
}

ReactDom.createRoot(
    document.querySelector( "appbar" )
).render(
    <Appbar />
);


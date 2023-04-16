

import React from "react";
import ReactDom from "react-dom/client";
import "./sidebar.css";


export default function Sidebar() {
    return( <>
        <header>Logo</header>
        <dummy>
            <item>01</item>
            <item>02</item>
            <item>03</item>
            <item>04</item>
            <item>05</item>
            <item>06</item>
        </dummy>
    </> );
}

ReactDom.createRoot(
    document.querySelector( "Sidebar" )
).render(
    <Sidebar />
);


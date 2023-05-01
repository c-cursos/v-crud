

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import ceo from "./utils/ceo";
import "./public/styles/globals/global.css";
import { Pages } from "./views";
import { Comps } from "./views/components";
import AppRoutes from "./routes";

export default function App() {
    
    return( <>
        <Comps.Appbar />
        <Comps.Sidebar />
        <main>
            <AppRoutes />
            app
        </main>
    </> );
}







import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import ceo from "../utils/ceo";
import "../public/styles/globals/global.css";
// import * as c from "../controllers/users";
import Appbar from "../components/globals/appbar/appbar";
import Sidebar from "../components/globals/sidebar/sidebar";
import Home from "../views/home";
import UsersAdd from "../views/users-add";
import About from "../views/about";
import Teste from "../views/teste";

export default function App() {
    

    return( <>
        <Appbar />
        <Sidebar />
        <main>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/users-add" element={ <UsersAdd /> } />
                <Route path="/teste" element={ <Teste /> } />
            </Routes>
            
        </main>
    </> );
}







import React from "react";
import Home from "../views/home";
import Sobre from "../views/sobre";
import About from "../views/about";

const routes = {
    "/": () => <Home />,
    "/sobre": () => <Sobre />,
    "/about": () => <About />,
};

export default routes;


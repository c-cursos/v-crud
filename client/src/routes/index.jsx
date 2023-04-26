

import React from "react";
import { Route, Switch } from "react-router-dom";

import Page404 from "../views/page404";
import HomePage from "../views/homePage";

export default Routes = () => (
    <Switch>
        <Route
            exact path="/"
            component={ HomePage } />

        <Route component={ Page404 } />
    </Switch>
);


/* ==[ app.jsx ]============================== */
// import { BrowserRouter as Router } from "react-router-dom";

// <Router>
//     <Routes />
// </Router>
/* =========================================== */
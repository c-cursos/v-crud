

import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { Link } from "react-router-dom";
import "./appbar.css";


export default function Appbar() {
    const 
        [ openned, setOpenned ] = useState( false );

    return( <appbar>
        <appbar-body>
            <appbar-brand
                    visible={ `${ openned && "active" }` }
                    onClick={ () => setOpenned( !openned ) } >
                ceo
            </appbar-brand>
            <appbar-menu>
                <menu className={ `${ openned && "is-active" }` }>
                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/sobre" >
                        Sobre
                    </Link>

                    <Link to="/about" >
                        About
                    </Link>
                </menu>
            </appbar-menu>
            <appbar-options>
                menu
            </appbar-options>
        </appbar-body>
    </appbar> );
}


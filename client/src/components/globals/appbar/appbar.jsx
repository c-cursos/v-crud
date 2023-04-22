

import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { NavLink } from "react-router-dom";
import "./appbar.css";


export default function Appbar() {
    const 
        [ openned, setOpenned ] = useState( false );

    return( <>
        <appbar-body>
            <appbar-brand
                    visible={ `${ openned && "active" }` }
                    onClick={ () => setOpenned( !openned ) } >
                ceo
            </appbar-brand>
            <appbar-menu>
                <menu className={ `${ openned && "is-active" }` }>
                    {/* <NavLink to="/"> */}
                        Página Principal
                    {/* </NavLink> */}

                    {/* <NavLink to="/about" > */}
                        Sobre
                    {/* </NavLink> */}

                    {/* <NavLink to="/profile" > */}
                        Perfil
                    {/* </NavLink> */}
                </menu>
            </appbar-menu>
            <appbar-options>
                menu
            </appbar-options>
        </appbar-body>
    </> );
}

ReactDom.createRoot(
    document.querySelector( "appbar" )
).render(
    <Appbar />
);


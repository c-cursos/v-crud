

import React from "react";


export default class About extends React.Component {
    render() { return( <>
        <style>
            galerry {
                display: grid;
                grid-auto-flow: row;
                gap: 2rem;
                border-radius: 13px;
                background: #f5f5f5;
                box-shadow: #fff 0 0 0 13px;
                padding: 2rem;
            }
        </style>
        <galerry>
            <t1>About</t1>
            <hr />
            <label>
                <input type="text" placeholder="preço" />
            </label>
            <label>
                <input type="text" placeholder="preço antigo" />
            </label>
            <label>
                <input type="text" placeholder="desconto" />
            </label>
        </galerry>
    </> ); }
}


// export default About;
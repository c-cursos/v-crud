

import React, { useState } from "react";
import "./card.css";
// import FormDialog from  "../dialogs/dialog";



export default function Card( props ) {
    // const [ open, setOpen ] = React.useState( true );
    const [ open, setOpen ] = useState( true );

    function handleOpen() { setOpen( true ); }
    function handleClose() { setOpen( false ); }

    return (
    <card-home>
        {/* <Form open={ open } setOpen={ setOpen }
            book_title={ props.book_title }
            book_review={ props.book_review }
            listCard={ props.listCard }
            setListCard={ props.setListCard }
            book_rating={ props.book_rating }
             /> */}
        <button onClick={ handleOpen }>Open</button>
        { open && (
            <h1>oi</h1>
        ) }
        <button onClick={ handleClose }>Close</button>
        <card onClick={ Open } >
            <t1>{ props.book_title }</t1>
            <p category="">{ props.book_review }</p>
            <p cost="">R$ { props.book_rating }</p>
            oi
        </card>
    </card-home>

    // <card onClick={ handleCardClick } >
    //     <t1>{ props.book_title }</t1>
    //     <p category="">{ props.book_review }</p>
    //     <p cost="">R$ { props.book_rating }</p>
    // </card>


    );
}



import React, { useState } from "react";
import "./card.css";
// import FormDialog from  "../dialogs/dialog";



export default function Card( props ) {
    // const [ open, setOpen ] = React.useState( true );
    const [ open, setOpen ] = useState( false );
    /* function Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <p style={{ visibility: isVisible ? "visible" : "hidden" }}>HELLO</p>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle visibility</button>
    </div>
  )
} */

    function handleCardClick() {
        setOpen( true );
    }

    return (
    <card-home>
        {/* <Form open={ open } setOpen={ setOpen }
            book_title={ props.book_title }
            book_review={ props.book_review }
            listCard={ props.listCard }
            setListCard={ props.setListCard }
            book_rating={ props.book_rating }
             /> */}
        <card onClick={ handleCardClick } >
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

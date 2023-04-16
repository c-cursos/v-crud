

import React, { useState } from "react";
import "./card.css";
import FormDialog from  "../dialogs/dialog";



export default function Card( props ) {
    const [ open, setOpen ] = React.useState( false );
    // const [ open, setOpen ] = useState( false );

    const handler = {
        open: () => { setOpen( true ); },
        close: () => { setOpen( false ); },
    };

    return(
        <>
            { open && (
                    <form open={ open } setOpen={ setOpen }
                        book_title={ props.book_title }
                        book_review={ props.book_review }
                        listCard={ props.listCard }
                        setListCard={ props.setListCard }
                        book_rating={ props.book_rating }>
                            <label>Book Title:
                                <input 
                                    type="text"
                                    name={ props.book_title }
                                    value={ props.book_title } />
                            </label>
                            <label>Book Review:
                                <input 
                                    type="text"
                                    name={ props.book_review }
                                    value={ props.book_review } />
                            </label>
                            <label>Book Rating:
                                <input 
                                    type="text"
                                    name={ props.book_rating }
                                    value={ props.book_rating } />
                            </label>
                        <button onClick={ handler.close }>Closed</button>
                        <card>
                            <t1>{ props.book_title }</t1>
                            <p category="">{ props.book_review }</p>
                            <p cost="">R$ { props.book_rating }</p>
                                oi
                            <button onClick={ handler.close }>Closed</button>
                        </card>
                    </form>
                ) }
            <button onClick={ handler.open }>Open</button>
            
        </>
    );
}

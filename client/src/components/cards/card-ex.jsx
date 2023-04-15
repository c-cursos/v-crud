

import React, { useState } from "react";
import "./card.css";
// import FormDialog from  "../dialogs/dialog";



export default function Card() {
    const [ open, setOpen ] = useState( false );
    function handleOpen() { setOpen( true ); }
    function handleClose() { setOpen( false ); }

    return(
      <div>
        <button onClick={ handleOpen }>
          Comment
        </button>
        { open && (
          <div>
            <h2>Modal show</h2>
            <button onClick={ handleClose }>Close modal</button>
          </div>
        ) }
      </div>
    );
}

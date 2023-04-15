

import React, { useState } from "react";
import "./card.css";
// import FormDialog from  "../dialogs/dialog";



export default function Card() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <div>
        <button className="btn btn-info" onClick={handleOpen}>
          Comment
        </button>
        {open && (
          <div>
            <h2>Modal show</h2>
            <button onClick={handleClose}>Close modal</button>
          </div>
        )}
      </div>
    );
  }
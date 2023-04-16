

import ceo from "../../utils/ceo";
import { useState, useEffect } from "react";
import axios from "axios";
import Add from "../../components/add";
import Edit from "../../components/edit";
import Delete from "../../components/delete";



function App() {
    const [ reviews, setReviews ] = useState( [] ),
        getReviews = () => {
            axios.get( `http://localhost:${ ceo.serverGate }/reviews` ).then( res => {
                setReviews( res.data );
            } );
        };
    
    useEffect( () => {
        getReviews();
    }, [ reviews ] );
    

    return(
        <div className="App">
            <header className="App-header">
                <p style={{
                    backgroundColor: "cornflowerblue",
                    marginTop: 0,
                    padding: "1rem", }} >
                    This is a demo for building a CRUD MySQL Node.js App tutorial. Still
                    in Progress. Tutorial will be available on lo-victoria.com
                </p>
            </header>
            <Add reviews={ reviews } setReviews={ setReviews } />
            <div className="reviews">
                { reviews.map( item => {
                    return(
                        <div className="review">
                        <h3>Title: { item.book_title }</h3>
                        <h3>Review: { item.book_review }</h3>
                        <h3>Rating: { item.book_rating }</h3>
                        <Edit id={ item.id } reviews={ reviews } setReviews={ setReviews } />
                        <Delete id={ item.id } reviews={ reviews } setReviews={ setReviews } />
                        </div>
                    );
                } ) }
            </div>
        </div>
        // <>
        //     oi
        // </>
    );
}

export default App;
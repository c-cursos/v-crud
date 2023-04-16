import { useState, useEffect } from "react";
import axios from "axios";
import ceo from "../../utils/ceo";
import "./App.css";
import Card from "../../components/cards/card";

function App() {
    const [ values, setValues ] = useState(0),
        handleValuesChanging = value => {
            setValues( prevValue => ( {
                ...prevValue,
                [ value.target.name ]: value.target.value,
            } ) );
        },
        handleButtonClick = () => {
            // console.log( values );
            axios.post( `http://localhost:${ ceo.serverGate }/register`, {
                book_title: values.book_title,
                book_review: values.book_review,
                book_rating: values.book_rating,
            } ).then( response => { console.log( response ) } );
        },
        
        [ listGames, setListGames ] = useState();

        // console.log( "listGames", listGames );

    useEffect( () => {
        axios.get( `http://localhost:${ ceo.serverGate }/clients` )
        .then( resp => {
            // console.log( resp );
            setListGames( resp.data );
        } );
    }, [] );


    return (
        <register-body>
            <form>  
                <t1>App-v Shop</t1>
                <input 
                    type="text" 
                    name="book_title"
                    placeholder="Book Title"
                    onChange={ handleValuesChanging } />
                <input 
                    type="text" 
                    name="book_review"
                    placeholder="Book Review"
                    onChange={ handleValuesChanging } />
                <input 
                    type="text" 
                    name="book_rating"
                    placeholder="Book Rating"
                    onChange={ handleValuesChanging } />
                <button 
                    type="submit" 
                    value="Register"
                    onClick={ handleButtonClick }>Register</button>
            </form>
            <cards>
            { typeof listGames != "undefined" && listGames.map( item => {
                console.log( item );
                return( 
                    <Card key={ item.id }
                        listCard={ listGames }
                        setListCard={ setListGames }
                        id={ item.id }
                        book_title={ item.book_title }
                        book_review={ item.book_review }
                        book_rating={ item.book_rating }
                    ></Card>
                ); }
            ) }
            </cards>
        </register-body>
        // <>oi</>
    );
}

export default App;


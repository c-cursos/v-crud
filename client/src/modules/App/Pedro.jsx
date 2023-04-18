import { useState, useEffect } from "react";
import axios from "axios";
import ceo from "../../utils/ceo";
import "./App.css";
// import Card from "../../components/cards/card";

export default function App() {
    const 
        [ name, setName ] = useState( "" ),
        [ gender, setGender ] = useState( "" ),
        [ email, setEmail ] = useState( "" ),
        [ newEmail, setNewEmail ] = useState( "" ),
        [ age, setAge ] = useState( 0 ),
        [ userList, setUserList ] = useState( [] ),
        users = {
            add: () => {
                const url = `http://localhost:${ ceo.serverGate }/create-user`;
                axios.post( url, {
                    name: name,
                    age: age,
                    gender: gender,
                    email: email
                } ).then( () => {
                    // setUserList( [ ...employList,
                    setUserList( [ ...userList,
                    {
                        name: name,
                        age: age,
                        gender: gender,
                        email: email
                    }, ] );
                } );
            },
            get: () => {
                const url = `http://localhost:${ ceo.serverGate }/users`;
                axios.get( url ).then( response => {
                    setUserList( response.data );
                } );
            },
            updateUserEmail: id => {
                const url = `http://localhost:${ ceo.serverGate }/update`;
                axios.put( url, { email: newEmail, id: id } ).then( response => {
                    setUserList( userList.map( user => {
                        return(
                            user.id == id ? 
                            { id: user.id,
                                name: user.name,
                                age: user.age,
                                gender: user.gender,
                                email: newEmail } : user
                        );
                    } ) );
                } );
            },
            deleteUser: id => {
                const url = `http://localhost:${ ceo.serverGate }/delete/${ id }`;
                axios.delete( url ).then( response => {
                    setUserList( userList.filter( user => {
                        return user.id != id;
                    } ) );
                } );
            },
        },
        handler = {
            // change: ( e, setV ) => {
            //     setV( e.target.value );
            // },
        };

    return( <register-body>
            <form>  
                <t1>Users</t1>
                <label>
                    <h4>Name:</h4>
                    <input type="text"
                        placeholder="Name"
                        onChange={ e => { setName( e.target.value ) } } />
                </label>
                <label>
                    <h4>Age:</h4>
                    <input type="number"
                        placeholder="Age"
                        onChange={ e => { setAge( e.target.value ) } } />
                </label>
                <label>
                    <h4>Gender:</h4>
                    <input type="text"
                        placeholder="Gender"
                        onChange={ e => { setGender( e.target.value ) } } />
                </label>
                <label>
                    <h4>Email:</h4>
                    <input type="email"
                        placeholder="Email"
                        onChange={ e => { setEmail( e.target.value ) } } />
                </label>
                <button onClick={ users.add }>Add</button>
            </form>
            <hr />
            <users>
                <button onClick={ users.get }>Show users</button>
                { userList.map( ( user, key ) => {
                    return( <>
                        <card>
                            <h3>Name: { user.name } </h3>
                            <p>e-mail: { user.email } </p>
                            <p>Age: { user.age } </p>
                            <p>Gender: { user.gender } </p>
                            <fieldset>
                                <input type="email" placeholder="new email"
                                    onChange={ e => setNewEmail( e.target.value ) } />
                                <button onClick={ () => { users.updateUserEmail( user.id ) } }>update</button>
                                <button onClick={ () => { users.deleteUser( user.id ) } }>delete</button>
                            </fieldset>
                        </card>
                    </> );
                } ) }
            </users>
    </register-body> );
}



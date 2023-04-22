import { useState, useEffect } from "react";
import axios from "axios";
import ceo from "../utils/ceo";
import "../public/styles/globals/global.css";
// import Card from "../../components/cards/card";

export default function App() {
    const 
        [ name, setName ] = useState( "" ),
        [ newName, setNewName ] = useState( "" ),
        [ gender, setGender ] = useState( "" ),
        [ newGender, setNewGender ] = useState( "" ),
        [ email, setEmail ] = useState( "" ),
        [ newEmail, setNewEmail ] = useState( "" ),
        [ age, setAge ] = useState( 0 ),
        [ newAge, setNewAge ] = useState( 0 ),
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
                    setUserList( [
                        ...userList,
                        {
                            name: name,
                            age: age,
                            gender: gender,
                            email: email
                        },
                    ] );
                } );
            },
            get: () => {
                const url = `http://localhost:${ ceo.serverGate }/users`;
                axios.get( url ).then( response => {
                    setUserList( response.data );
                } );
            },
            update: {
                name: id => {
                    const url = `http://localhost:${ ceo.serverGate }/update-user-name`;
                    axios.put( url, { name: newName, id: id } ).then( response => {
                        setUserList( userList.map( user => {
                            return(
                                user.id == id ? 
                                { id: user.id,
                                    name: newName,
                                    age: user.age,
                                    gender: user.gender,
                                    email: user.email } : user
                            );
                        } ) );
                    } );
                },
                age: id => {
                    const url = `http://localhost:${ ceo.serverGate }/update-user-age`;
                    axios.put( url, { age: newAge, id: id } ).then( response => {
                        setUserList( userList.map( user => {
                            return(
                                user.id == id ? 
                                { id: user.id,
                                    name: user.name,
                                    age: newAge,
                                    gender: user.gender,
                                    email: user.email } : user
                            );
                        } ) );
                    } );
                },
                gender: id => {
                    const url = `http://localhost:${ ceo.serverGate }/update-user-gender`;
                    axios.put( url, { gender: newGender, id: id } ).then( response => {
                        setUserList( userList.map( user => {
                            return(
                                user.id == id ? 
                                { id: user.id,
                                    name: user.name,
                                    age: user.age,
                                    gender: newGender,
                                    email: user.email } : user
                            );
                        } ) );
                    } );
                },
                email: id => {
                    const url = `http://localhost:${ ceo.serverGate }/update-user-email`;
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
            },
            delete: id => {
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

    return( <>
            <form>  
                <form-body>
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
                </form-body>
            </form>
            <hr />
            <users>
                <button onClick={ users.get }>Show users</button>
                { userList.map( ( user, key ) => {
                    return( <>
                        <card>
                            <card-body>
                                <t6><strong>Name:</strong> { user.name } <br />
                                <strong>e-mail:</strong> { user.email } <br />
                                <strong>Age:</strong> { user.age } <br />
                                <strong>Gender:</strong> { user.gender } </t6>
                                <fieldset>
                                    <legend>User: { user.name.split( " " ).shift() } </legend>
                                    <label> New Name:
                                        <input type="text" placeholder="new name"
                                            onChange={ e => setNewName( e.target.value ) } />
                                    </label>
                                    <button onClick={ () => { users.update.name( user.id ) } }>update name</button>

                                    <label> New Email:
                                        <input type="email" placeholder="new email"
                                            onChange={ e => setNewEmail( e.target.value ) } />
                                    </label>
                                    <button onClick={ () => { users.update.email( user.id ) } }>update email</button>

                                    <label> New Age:
                                        <input type="number" placeholder="new age"
                                            onChange={ e => setNewAge( e.target.value ) } />
                                    </label>
                                    <button onClick={ () => { users.update.age( user.id ) } }>update age</button>

                                    <label> New Gender:
                                        <input type="text" placeholder="new gender"
                                            onChange={ e => setNewGender( e.target.value ) } />
                                    </label>
                                    <button onClick={ () => { users.update.gender( user.id ) } }>update gender</button>

                                    <button onClick={ () => { users.delete( user.id ) } }>delete</button>
                                </fieldset>
                            </card-body>
                        </card>
                    </> );
                } ) }
            </users>
    </> );
}



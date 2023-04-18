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
        [ employeeList, setEmployeeList ] = useState( [] ),
        employees = {
            add: () => {
                const url = `http://localhost:${ ceo.serverGate }/create-employee`;
                axios.post( url, {
                    name: name,
                    age: age,
                    gender: gender,
                    email: email
                } ).then( () => {
                    setEmployeeList( [ ...employList,
                    {
                        name: name,
                        age: age,
                        gender: gender,
                        email: email
                    }, ] );
                } );
            },
            get: () => {
                const url = `http://localhost:${ ceo.serverGate }/employees`;
                axios.get( url ).then( response => {
                    setEmployeeList( response.data );
                } );
            },
            updateEmployeeEmail: id => {
                const url = `http://localhost:${ ceo.serverGate }/update`;
                axios.put( url, { email: newEmail, id: id } ).then( response => {
                    setEmployeeList( employeeList.map( employee => {
                        return(
                            employee.id == id ? 
                            { id: employee.id,
                                name: employee.name,
                                age: employee.age,
                                gender: employee.gender,
                                email: newEmail } : employee
                        );
                    } ) );
                } );
            },
            deleteEmployee: id => {
                const url = `http://localhost:${ ceo.serverGate }/delete/${ id }`;
                axios.delete( url ).then( response => {
                    setEmployeeList( employeeList.filter( employee => {
                        return employee.id != id;
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
                <t1>Pedro Shop</t1>
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
                <button onClick={ employees.add }>Add</button>
            </form>
            <hr />
            <employees>
                <button onClick={ employees.get }>Show employees</button>
                { employeeList.map( ( employee, key ) => {
                    return( <>
                        <card>
                            <h3>Name: { employee.name } </h3>
                            <p>e-mail: { employee.email } </p>
                            <p>Age: { employee.age } </p>
                            <p>Gender: { employee.gender } </p>
                            <fieldset>
                                <input type="email" placeholder="new email"
                                    onChange={ e => setNewEmail( e.target.value ) } />
                                <button onClick={ () => { employees.updateEmployeeEmail( employee.id ) } }>update</button>
                                <button onClick={ () => { employees.deleteEmployee( employee.id ) } }>delete</button>
                            </fieldset>
                        </card>
                    </> );
                } ) }
            </employees>
    </register-body> );
}



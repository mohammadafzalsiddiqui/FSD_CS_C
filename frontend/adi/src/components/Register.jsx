import React from 'react';
import axios from 'axios';

function Register() {
    const adi = async (e) => {
        e.preventDefault();
        const user = {
            name: e.target.name.value,
            age: e.target.age.value
        };
        await axios.post('http://localhost:3000/users', user);
        alert("Data Successfully saved");
        // Optional: Clear the form after submission
        e.target.reset();
    };

    return (
        <div style={{border: '2px solid green'}}>
            <h1 style={{color: 'red'}}>Create User</h1>
            <form onSubmit={adi}>
                <label>Name: <input type="text" name="name"></input></label>
                <label>Age: <input type="text" name="age"></input></label>
                <button type="submit">SAVE DATA</button>
            </form>
        </div>
    );
}

export default Register;
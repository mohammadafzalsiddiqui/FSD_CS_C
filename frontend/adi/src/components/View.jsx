import React, { useState, useEffect } from 'react'
import axios from 'axios'
function View() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        viewdata()
    })
    const viewdata = async () => {
        const res = await axios.get('http://localhost:3000/users')
        setUsers(res.data)
    }
  return (
    <div>
        <h1 style={{color:'red'}}>SHOW DATA</h1>
        <table style={{border: '2px solid red', width: '100%',backroundcolor:'greenyellow'}}>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
            </tr>
            {users.map((user) =>(
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.age}</th>
                </tr>       
            ))}
        </table>
    </div>
  )
}

export default View
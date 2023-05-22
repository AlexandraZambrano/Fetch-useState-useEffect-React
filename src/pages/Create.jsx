import React, { useState } from 'react'
import axios from 'axios';

const Create = () => {

    const [users, setUsers] = useState({
        Name: "",
        email: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;

        setUsers({
            ...users,
            [e.target.name]: value,
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        

        axios.put(`https://jsonplaceholder.typicode.com/users/1`, {users})
        .then(res => console.log(res.data))
    }
  return (
    <div>
      <p>Add Users</p>
      <div>
        <form onSubmit={submitForm}>
          <label>
            User Name:
            <input
              type="text"
              name="Name"
              placeholder="name"
              value={users.Name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              value={users.userName}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>

  )
}

export default Create

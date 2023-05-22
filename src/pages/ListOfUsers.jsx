import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UsersList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getData = async() => {
           await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(result => setUsers(result.data))
        }
        getData()
    }, [])

  return (
    <div>
      {
        users.map((int) => {
            return(
            <div key={int.id}>
                <h1>{int.name}</h1>
                <p>{int.email}</p>
            </div>
            )
        })
      }
    </div>
  )
}

export default UsersList
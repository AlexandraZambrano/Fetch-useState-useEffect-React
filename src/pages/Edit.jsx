import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const [users, setUsers] = useState({})

    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        const getData = async() => {
           await axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            .then(result => setUsers(result.data))
        }
        getData()
    }, [id])

  return (
    <div>
        <h1>{users.name}</h1>
        <p>{users.email}</p>
    </div>
  )
}

export default Edit

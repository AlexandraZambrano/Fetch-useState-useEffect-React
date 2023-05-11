import React, { useEffect, useState } from 'react'

const url = "https://jsonplaceholder.typicode.com/users"

function Fetch() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    }, [])

  return (
    <div>
      {
        data.map((x) => {
            return(
                <div key={x.id}>
                    <h1>{x.name}</h1>
                </div>
            )
        })
      }
    </div>
  )
}

export default Fetch

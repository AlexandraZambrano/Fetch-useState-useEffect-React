import React, { useEffect, useState } from 'react'

function ComponenteUseEffect() {

    const [click, setClick] = useState(0)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("Carga la 1era vez y cuando cambia el estado")
    })

    useEffect(() => {
        console.log("Carga 1 vez")
    }, [])

    useEffect(() => {
        console.log("Cargo cuando cambias Click")
    }, [click])

  return (
    <div>
      <button onClick={() => setClick(click + 1)}>Has clicado {click} veces</button>
      <button onClick={() => setCounter(counter + 1)}>Contados: {counter}</button>
    </div>
  )
}

export default ComponenteUseEffect

import React, { useState } from 'react'

function UseState() {

    const [click, setClick] = useState(0)


  return (
    <div>
      {/* <button onClick={handleClick}>Has clicado {click} veces</button> */}
      <button onClick={() => setClick(click + 1)}>Has clicado {click} veces</button>
    </div>
  )
}

export default UseState




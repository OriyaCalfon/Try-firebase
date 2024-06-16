import { useState } from 'react'


function Child({children}) {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>hi</h1>
   {children}
    </>
  )
}

export default Child
import { useState } from 'react'
import './App.css'
import Square from './components/square/Square';
// import Child from './components/child/Child'

function App({}) {
  const [count, setCount] = useState(0)

  const size=100;
  return (
    <>
    
    <Square s={size} c='red'>
       <input type="checkbox"></input> 
    </Square>

    <Square s={size*2} c='blue'>
      <input type="text" placeholder='I am blue'></input>
    </Square>
    
    <Square s={size*3} c='yellow'>
      <div>I am yellow</div>
    </Square>
    </>
  )
}

export default App

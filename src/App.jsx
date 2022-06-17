import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleChange=(value)=>{
     setCount(count+value)
  }
  

  return (
    <div className="App">
      <h1 className='count'>counter : {count}</h1>
      <button className='btn1' onClick={()=>{handleChange(1)}}>ADD 1</button>
      <button className='btn2' onClick={()=>{handleChange(-1)}}>SUB 1</button>
    </div>
  )
}

export default App

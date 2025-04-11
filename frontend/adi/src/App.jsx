import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import View from './components/View'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{border : '5px solid red'}}>
      <h1 style={{backgroundColor:"black", color:'white'}}>CRUD Operation</h1>
      <Register/>
      <View/>
    </div>
  )
}

export default App

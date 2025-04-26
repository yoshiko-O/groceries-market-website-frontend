import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2 className='font-dosis'>Grocery</h2>
    </div>
  )
}

export default App

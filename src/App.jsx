import { useState } from 'react'
import './App.css'
import { TodoWrapper } from './components/TodoWrapper'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TodoWrapper />
      </div>
      
    </>
  )
}

export default App

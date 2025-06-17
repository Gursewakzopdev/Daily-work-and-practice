import { useState } from 'react'
import {TodoList} from './components/TodoList'
import PlaneBookingSystem from './components/PlaneBookingSystem'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlaneBookingSystem/>
    </>
  )
}

export default App

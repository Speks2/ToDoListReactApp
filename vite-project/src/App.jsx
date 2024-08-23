import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoHeader from './assets/components/ToDoHeader/ToDoHeader'
import ToDoBody from './assets/components/ToDoBody/ToDoBody'
import ToDoFooter from './assets/components/ToDoFooter/ToDoFooter'

function App() {

  return (
    <>
      <ToDoHeader/>
      <ToDoBody/>
      <ToDoFooter/>

    </>
  )
}

export default App

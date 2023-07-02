import { useState } from 'react'
import {MgsContainer, IdAndDisplayName} from './exports/export.js'
import './App.css'

function App() {
  
  const [disabled, setIsDisabled] = useState(true)
  console.log(disabled);
  
  return (
    <>
      <IdAndDisplayName setIsDisabled={setIsDisabled} />
      <MgsContainer disabled={disabled} />
    </>
  )
}

export default App

import './App.css'
import Mensaje from './componenentes/Mensaje'
import { useState } from 'react'

function App() {
const [texto, setText] = useState("Apretá el botón para ver la pregunta")

  fetch(_raw)
  .then(r => r.text())
  .then(text => { setRaw(text) });

  return (
    <>
<Mensaje mensaje={texto}/>
<button onClick={()=>{
  setText("Cargando pregunta...")
  setTimeout(()=>{
      setText("./preguntas/p-1.txt")
  }, 2000)
}}>Jugar</button>
    </>
  )
}

export default App

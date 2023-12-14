import './App.css'
import Mensaje from './componenentes/Mensaje'
import { useState } from 'react'
import preguntas from './data/preguntas.json'
import  Opcion  from './componenentes/Opcion'
import respuestas from './data/respuestas.json'

function App() {
const [texto, setTexto] = useState("Apretá el botón para ver la pregunta")
const [op1, setOp1] = useState("Opción 1")
const [op2, setOp2] = useState("Opción 2")
const max = 3;

  return (
    <>

<Mensaje mensaje={texto} />
<button onClick={()=>{
let num = (Math.floor(Math.random() * max)+1).toString();
let numPreg = (Math.floor(Math.random() * max)+1).toString();
  setTimeout(()=>{
setTexto(preguntas[0][3].pregunta)
setOp1(respuestas[0].pregunta_1[0][numPreg].opcion1[0])
setOp2(respuestas[0].pregunta_1[0][numPreg].opcion2[0])
  }, 2000)
}}>Jugar</button>
<Opcion opcion={op1}/>
<Opcion opcion={op2}/>
    </>
  )
}

export default App

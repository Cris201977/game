import './App.css'
import Mensaje from './componenentes/Mensaje'
import { useState } from 'react'
import preguntas from './data/preguntas.json'
import respuestas from './data/respuestas.json'

function App() {
const [texto, setTexto] = useState("Apretá el botón para ver la pregunta")
const [op1, setOp1] = useState("Opción 1")
const [op2, setOp2] = useState("Opción 2")
const [num, setNum] = useState("")
const [numPreg, setnumPreg] = useState()
const [puntos, setPuntos] = useState(0)
const [resultado, setResultado] = useState()
const max = 3;
  return (
    <>

<Mensaje mensaje={texto} />
<button onClick={()=>{
let n = (Math.floor(Math.random() * max)+1).toString();
let nP =(Math.floor(Math.random() * max)+1).toString();
setNum(n);
setnumPreg(nP);
  setTimeout(()=>{
setTexto(preguntas[0][3].pregunta)
setOp1(respuestas[0][3][0][n].opcion1[0])
setOp2(respuestas[0][3][0][n].opcion2[0])
}, 2000)
}}>Jugar</button>
<button onClick={()=>{
setResultado(respuestas[0][3][0][num].opcion1[1])
console.log(resultado)
respuestas[0][3][0][num].opcion1[1] == "verdadero" ? setPuntos(puntos + 1): setPuntos(puntos - 1)
}}>{op1}</button>
<button onClick={()=>{
setResultado(respuestas[0][3][0][num].opcion2[1])
respuestas[0][3][0][num].opcion2[1] == "verdadero" ? setPuntos(puntos + 1): setPuntos(puntos - 1)
}}>{op2}</button>
<h2>{resultado}</h2>
<h1>{puntos}</h1>
    </>
  )
}

export default App

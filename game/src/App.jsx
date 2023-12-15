import './App.css'
import Mensaje from './componenentes/Mensaje'
import { useState, useEffect } from 'react'
import preguntas from './data/preguntas.json'
import respuestas from './data/respuestas.json'
import Swal from 'sweetalert2'

function App()  {
const max = 3;
const [texto, setTexto] = useState("Apretá el botón para ver la pregunta")
const [op1, setOp1] = useState("Opción 1")
const [op2, setOp2] = useState("Opción 2")
const [num, setNum] = useState("")
const [numPreg, setnumPreg] = useState()
const [puntos, setPuntos] = useState(0)
const [resultado, setResultado] = useState()
const [styleOpcion, setStyleOpcion] = useState({visibility: "hidden"})
const [styleAlert, setStyleAlert] = useState()
let [count, setCount] = useState(10);

useEffect(() => {
const interval = setInterval(() => {
setCount(count - 1);
  }, 1000);
  return () => clearInterval(interval);
}, [count]);
if(count == 0){
  setCount(10)
}
const mostrarResultado = function (res){
  setCount(10)

  setStyleOpcion({visibility:"hidden"})
  console.log(res)
  Swal.fire({
title : (res == "falso" ? res.charAt(0).toUpperCase().fontcolor("red") + res.slice(1).fontcolor("red"): res.charAt(0).toUpperCase().fontcolor("green") + res.slice(1).fontcolor("green")),
showConfirmButton: false,
background: res == "verdadero" ? '#ABEBC6': "#F08080",
timer: 1500
})
setTexto("Apretá el botón para ver la pregunta")
}
  return (
    <>
<h1>{puntos}</h1>
<Mensaje mensaje={texto} />
<button onClick= {()=>{
let n = (Math.floor(Math.random() * max)+1).toString();
let nP =(Math.floor(Math.random() * max)+1).toString();
setNum(n);
setnumPreg(nP);
setTimeout(()=>{
setTexto(preguntas[0][3].pregunta)
setOp1(respuestas[0][3][0][n].opcion1[0])
setOp2(respuestas[0][3][0][n].opcion2[0])
setCount(10)
setStyleOpcion({visibility:"visible"})
}, 2000)
}}>Jugar</button>
<div style={styleOpcion}>
<p>{count}</p>

<button onClick={()=>{
setResultado(respuestas[0][3][0][num].opcion1[1])
console.log(resultado)
respuestas[0][3][0][num].opcion1[1] == "verdadero" ? setPuntos(puntos + 1): setPuntos(puntos - 1)
mostrarResultado(respuestas[0][3][0][num].opcion1[1])
}}>{op1}</button>
<button onClick={()=>{
setResultado(respuestas[0][3][0][num].opcion2[1])
respuestas[0][3][0][num].opcion2[1] == "verdadero" ? setPuntos(puntos + 1): setPuntos(puntos - 1)
mostrarResultado(respuestas[0][3][0][num].opcion2[1])
}}>{op2}</button>
</div>
    </>
  )
}

export default App

import './App.css'
import Mensaje from './componenentes/Mensaje'
import { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import preguntas from './data/preguntas.json'
import respuestas from './data/respuestas.json'
import Swal from 'sweetalert2'
import Jugadores from './componenentes/Jugadores'
import styled from 'styled-components';
import useSound from 'use-sound';
import fondo from './sonidos/toing.mp3'
import Sonido from './componenentes/Sonido'
import correcto from './sonidos/correcto.mp3'
import incorrecto from './sonidos/incorrecto.mp3'
import segundo from './sonidos/segundo.mp3'
import tiempooo from './sonidos/tiempooo.mp3'



function App()  {


const [TextoRojo, setTextoRojo] = useState(
  styled.div`
  color: black;
  margin: 0 auto;
  background-color: #D5F5E3 ;
  font-size: 25px;
  padding: 35px;
  height: 480px;
`);
const [Button, setButton] = useState(
  styled.button`
  width: 90px;
  height: 70px;
  border-radius: 40px;
  font-size: 20px;
  background-color: green;
  color: rgb(243, 243, 243);
  box-shadow: 5px 5px 5px 2px black;
`)

const max = 4;
const [playSound] = useSound(fondo)
const [play1, { stop1 }] = useSound(fondo);
const [play2, { stop2 }] = useSound(correcto);
const [play3, { stop3 }] = useSound(incorrecto);
const [play4, { stop4 }] = useSound(segundo);
const [play5, { stop5 }] = useSound(tiempooo);
const [texto, setTexto] = useState("Apretá el botón para ver la pregunta")
const [op1, setOp1] = useState("Opción 1")
const [op2, setOp2] = useState("Opción 2")
const [num, setNum] = useState("")
const [numPreg, setnumPreg] = useState()
const [resultado, setResultado] = useState()
const [styleOpcion, setStyleOpcion] = useState({visibility: "hidden"})
let [count, setCount] = useState();
let [activoA, setActivoA] = useState(0);
let [activoB, setActivoB] = useState(0);
const jugador_A = {}
const jugador_B = {}
jugador_A.activo = activoA
jugador_B.activo = activoB
if((jugador_B.activo >0)||(jugador_A.activo >0)){
jugador_A.puntos =  localStorage.getItem("jugador_A")
jugador_B.puntos =  localStorage.getItem("jugador_B")}
else{
  jugador_A.puntos=0
  localStorage.setItem("jugador_A", JSON.stringify(0))
  jugador_B.puntos=0
  localStorage.setItem("jugador_B", JSON.stringify(0))
}

function jugadores (punto){
jugador_A.activo == jugador_B.activo ? (
localStorage.setItem("jugador_A", JSON.stringify(parseInt(punto) + parseInt(jugador_A.puntos))),
setActivoA( activoA +1)
):(localStorage.setItem("jugador_B", JSON.stringify(parseInt(punto) + parseInt(jugador_B.puntos))),
setActivoB( activoB +1)
)
}

useEffect(() => {
if (count <= 10){
  const interval = setInterval(() => {
setCount(count - 1),
count <= 4 ? play4(): ""
count == 0 ? ((jugadores(-1)), (setTexto("Apretá el botón para ver la pregunta")), (play5()),
 Swal.fire({
title : "TIEMPO CUMPLIDO",
showConfirmButton: false,
background: "#F08080",
timer: 1500
})
): ""
  }, 1000);
  return () => clearInterval(interval);
}}, [count]);

if(count < 0){
  setStyleOpcion({visibility:"hidden"})
  setCount()
}
const mostrarResultado = function (res){
  setCount()
  setStyleOpcion({visibility:"hidden"})
  res == "verdadero" ? (jugadores(1), play2()): (jugadores(-1), play3())
  Swal.fire({
title : (res == "falso" ? res.charAt(0).toUpperCase().fontcolor("red") + res.slice(1).fontcolor("red") + ": -1": res.charAt(0).toUpperCase().fontcolor("green") + res.slice(1).fontcolor("green")  + ": +1"),
showConfirmButton: false,
background: res == "verdadero" ? '#ABEBC6': "#F08080",
timer: 1500
})
setTexto("Apretá el botón para ver la pregunta")
}

  return (
    <TextoRojo>

<Sonido/>

<Jugadores />
<Mensaje mensaje={texto} />
{jugador_A.activo != jugador_B.activo ?
<Button onClick= {()=>{
let n = (Math.floor(Math.random() * max)+1).toString();
let nP =(Math.floor(Math.random() * 3)+1).toString();
setNum(n);
setnumPreg(nP);
setTimeout(()=>{
    play1()
  console.log(nP)
setTexto(preguntas[0][nP].pregunta)
setOp1(respuestas[0][nP][0][n].opcion1[0])
setOp2(respuestas[0][nP][0][n].opcion2[0])
setCount(10)
setStyleOpcion({visibility:"visible"})
}, 2000)
}}>Jugar</Button>
:
<button className='buttonPlay' onClick= {()=>{
let n = (Math.floor(Math.random() * max)+1).toString();
let nP =(Math.floor(Math.random() * 3)+1).toString();
setNum(n);
setnumPreg(nP);
setTimeout(()=>{
    play1()
  console.log(nP)
setTexto(preguntas[0][nP].pregunta)
setOp1(respuestas[0][nP][0][n].opcion1[0])
setOp2(respuestas[0][nP][0][n].opcion2[0])
setCount(10)
setStyleOpcion({visibility:"visible"})
}, 1000)
}}>Jugar</button>
}

<div style={styleOpcion}>
<p>{count}</p>
<button onClick={()=>{
setResultado(respuestas[0][numPreg][0][num].opcion1[1])
mostrarResultado(respuestas[0][numPreg][0][num].opcion1[1])
}}>{op1}</button>
<button onClick={()=>{
setResultado(respuestas[0][numPreg][0][num].opcion2[1])
mostrarResultado(respuestas[0][numPreg][0][num].opcion2[1])

}}>{op2}</button>
</div>
    </TextoRojo>
  )
}

export default App

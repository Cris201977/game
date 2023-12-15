import './App.css'
import Mensaje from './componenentes/Mensaje'
import { useState, useEffect } from 'react'
import preguntas from './data/preguntas.json'
import respuestas from './data/respuestas.json'

function App() {
  const max = 3;
const [texto, setTexto] = useState("Apretá el botón para ver la pregunta")
const [op1, setOp1] = useState("Opción 1")
const [op2, setOp2] = useState("Opción 2")
const [num, setNum] = useState("")
const [numPreg, setnumPreg] = useState()
const [puntos, setPuntos] = useState(0)
const [resultado, setResultado] = useState()
const [styleOpcion, setStyleOpcion] = useState({visibility: "hidden"})
let [count, setCount] = useState();

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
if(count == 0){
  setCount()

}
  return (
    <>
<h1>{puntos}</h1>
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
setCount()
setStyleOpcion({visibility:"hidden"})
}}>{op1}</button>
<button onClick={()=>{
setResultado(respuestas[0][3][0][num].opcion2[1])
respuestas[0][3][0][num].opcion2[1] == "verdadero" ? setPuntos(puntos + 1): setPuntos(puntos - 1)
setCount()
setStyleOpcion({visibility:"hidden"})
}}>{op2}</button>
<h2>{resultado}</h2>
</div>

    </>
  )
}

export default App

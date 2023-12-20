import Swal from 'sweetalert2'

function Jugadores() {
  const puntaje = 2;
  let a = localStorage.getItem("jugador_A")
  let b = localStorage.getItem("jugador_B")
  const condicion_1= a <puntaje && a >(-puntaje)
  const condicion_2 = b <puntaje && b >(-puntaje)
  let ganador
  if(a ==puntaje || b==(-puntaje) ) ganador = "Ha ganado A"
  if(b ==puntaje || a==(-puntaje)) ganador = "Ha ganado B"

  if (!condicion_1 || !condicion_2){
  Swal.fire({
  title : ganador.fontcolor("geen") ,
  showConfirmButton: false,
  background: '#ABEBC6',
  timer: 5000
  })}

  return (
    <div className='jugadores'>
        <h3 className='azul'>Jugador Azul: {a}</h3>
        <h3 className='verde'>Jugador Verde: {b}</h3>
    </div>
  )
}

export default Jugadores

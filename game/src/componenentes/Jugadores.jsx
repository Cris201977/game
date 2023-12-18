import React from 'react'

function Jugadores() {

  return (
    <div className='jugadores'>
        <h3 className='azul'>Jugador Azul: {localStorage.getItem("jugador_A")}</h3>
        <h3 className='verde'>Jugador Verde: {localStorage.getItem("jugador_B")}</h3>
    </div>
  )
}

export default Jugadores

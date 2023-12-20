import useSound from 'use-sound';
import { FaPlay, FaStop } from "react-icons/fa";


import fondo from '../sonidos/fondo.mp3'

const Sonido = () => {
  const [play, { stop }] = useSound(fondo);

  return (
<>
    <FaPlay  onClick={() => play()}  className="fa-solid fa-volume-high" />
    <FaStop  onClick={() => stop()} className="fa-solid fa-volume-high" />
</>
  );
  }


export default Sonido

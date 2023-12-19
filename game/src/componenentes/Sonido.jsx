import useSound from 'use-sound';



import fondo from '../sonidos/sleep-talking-ogg-68026.mp3'

const Sonido = () => {
  const [play, { stop }] = useSound(fondo);

  return (
    <button onClick={() => play()} onSubmit={() => stop()}>
      <span role="img" aria-label="trumpet">
        🎺
      </span>
    </button>
  );
  }


export default Sonido

import useSound from 'use-sound';

import boopSfx from '../sonidos/sleep-talking-ogg-68026.mp3'

const Sonido = () => {
  const [play] = useSound(boopSfx);

  return <button onClick={play}>Sound</button>;
};

export default Sonido

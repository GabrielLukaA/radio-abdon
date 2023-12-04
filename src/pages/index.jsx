import { useEffect, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    const audioo = new Audio("Trop.mp3");
    setAudio(audioo);
  }, []);

  function playAudio() {
    audio.play();
  }
  function pauseAudio() {
    audio.pause();
  }
  return (
    <div>
      <h1
        onClick={() => {
          if (isPlaying) {
            pauseAudio();
            setIsPlaying(false);
          } else {
            playAudio();
            setIsPlaying(true);
          }
        }}
      >
        MEUDEUS
      </h1>
      <p onClick={()=>{
        audio.pause()
        setAudio(new Audio("bah.mp3"))
      }}>askdadjksla</p>
    </div>
  );
}

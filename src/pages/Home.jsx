/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import { OrbitControls } from "@react-three/drei";
import Island from "../models/Island";
import { Sky } from "../models/Sky";
import { Dragon } from "../models/Dragon";
import sakura from "../assets/sakura.mp3";
import { soundon, soundoff } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    if (isPlayingMusic) {
      currentAudioRef.play();
    } else {
      currentAudioRef.pause();
    }

    return () => {
      currentAudioRef.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -8, 0];
    let rotation = [0, 0, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  let cameraPosition = [];
  if (window.innerWidth < 768) {
    cameraPosition = [25, 0, 15];
  } else {
    cameraPosition = [15, 0, 15];
  }
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ position: cameraPosition, near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={3} />
            <ambientLight intensity={1} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
            <Sky />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={rotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
            <Dragon isRotating={isRotating} />
            <OrbitControls
              enableRotate={true}
              enableZoom={true}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              // minPolarAngle={Math.PI / 2}
              minDistance={5} // Set the minimum zoom distance
              maxDistance={window.innerWidth < 768 ? 50 : 25}
            />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-2 left-2">
          <img
            src={!isPlayingMusic ? soundoff : soundon}
            alt="sound"
            className="w-10 h-10 cursor-pointer object-container"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </section>
    </>
  );
};
export default Home;

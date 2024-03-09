/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import  { Suspense, useState } from "react";
import Loader from "../components/Loader";
import { OrbitControls } from "@react-three/drei";
import Island from "../models/Island";
import { Sky } from "../models/Sky";
import { Dragon } from "../models/Dragon";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

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
console.log(currentStage)
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        popup
      </div> */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ position: [15, 0, 15], near: 0.1, far: 1000 }}
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
              setCurrentStage={setCurrentStage}
            />
            <Dragon isRotating={isRotating} />
            <OrbitControls
              enableRotate={true}
              enableZoom={true}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              // minPolarAngle={Math.PI / 2}
              minDistance={5} // Set the minimum zoom distance
              maxDistance={25}
            />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
};

export default Home;

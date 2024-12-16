/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unknown-property */
import  { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import birdScene from "../assets/3d/snow_dragon.glb";

export function Dragon({ isRotating }) {
  const birdRef = useRef();
  const orbitRadius = 15;
  const orbitSpeed = 0.1;

  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["run"].play();
  }, [actions]);

  // Define a variable to control the bird's body direction
  const desiredRotationAngle = 15.5; // Adjust this value to set the desired rotation angle

  useFrame(({ clock }) => {
    if (!isRotating) {
      const elapsedTime = clock.getElapsedTime();
      const rotationDuration = 4; // Adjust this value to control the duration of one full rotation

      // Calculate the rotation angle based on elapsed time and orbitSpeed
      const rotationAngle =
        (((elapsedTime * orbitSpeed) % rotationDuration) / rotationDuration) *
        Math.PI *
        2;

      const x = Math.cos(rotationAngle) * orbitRadius;
      const z = Math.sin(rotationAngle) * orbitRadius;

      birdRef.current.position.x = x;
      birdRef.current.position.z = z;

      // Calculate the direction vector from the bird to the center of the island
      const directionToCenter = new THREE.Vector3(x, 0, z).normalize();

      // Calculate the angle between the positive z-axis and the direction vector
      const angleToCenter = Math.atan2(
        directionToCenter.x,
        directionToCenter.z
      );

      // Set the rotation of the bird's mesh to the desired rotation angle
      birdRef.current.rotation.y =
        angleToCenter + Math.PI / 2 + desiredRotationAngle;

      // Set the position of the bird
      birdRef.current.position.y = 0; // Assuming no movement in the y-axis
    }
  });

  return (
    <mesh ref={birdRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
      <primitive object={scene} />
    </mesh>
  );
}

Dragon.propTypes = {
  isRotating: PropTypes.bool.isRequired,
};

// import React, { useRef, useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useGLTF, useAnimations } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// import birdScene from "../assets/3d/snow_dragon.glb";

// export function Dragon({ isRotating }) {
//   const birdRef = useRef();
//   const orbitRadius = 15;
//   const orbitSpeed = 0.1;

//   const { scene, animations } = useGLTF(birdScene);
//   const { actions } = useAnimations(animations, birdRef);

//   const [isMouseOver, setIsMouseOver] = useState(false);

//   useEffect(() => {
//     actions[isMouseOver ? "atk01" : "run"].play();
//   }, [isMouseOver, actions]);

//   const handleMouseOver = () => {
//     setIsMouseOver(true);
//   };

//   const handleMouseOut = () => {
//     setIsMouseOver(false);
//   };

//   const desiredRotationAngle = 15.5;

//   useFrame(({ clock }) => {
//     if (!isRotating && !isMouseOver) {
//       const elapsedTime = clock.getElapsedTime();
//       const rotationDuration = 4;

//       const rotationAngle =
//         (((elapsedTime * orbitSpeed) % rotationDuration) / rotationDuration) *
//         Math.PI *
//         2;

//       const x = Math.cos(rotationAngle) * orbitRadius;
//       const z = Math.sin(rotationAngle) * orbitRadius;

//       birdRef.current.position.x = x;
//       birdRef.current.position.z = z;

//       const directionToCenter = new THREE.Vector3(x, 0, z).normalize();
//       const angleToCenter = Math.atan2(
//         directionToCenter.x,
//         directionToCenter.z
//       );

//       birdRef.current.rotation.y =
//         angleToCenter + Math.PI / 2 + desiredRotationAngle;

//       birdRef.current.position.y = 0;
//     }
//   });

//   return (
//     <mesh
//       ref={birdRef}
//       position={[0, 0, 0]}
//       scale={[2, 2, 2]}
//       onPointerOver={handleMouseOver}
//       onPointerOut={handleMouseOut}
//     >
//       <primitive object={scene} />
//     </mesh>
//   );
// }

// Dragon.propTypes = {
//   isRotating: PropTypes.bool.isRequired,
// };

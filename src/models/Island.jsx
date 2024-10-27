/* eslint-disable react/no-unknown-property */

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {a} from '@react-spring/three'
import islandScene from '../assets/3d/island.glb'

const Island=(props) => {
  const islandRef = useRef()
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group ref={islandRef} {...props} >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.007}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={100}>
            <mesh
              geometry={nodes.bridge_destroyed_Bridge_0.geometry}
              material={materials.Bridge}
            />
            <mesh
              geometry={nodes.bridge_destroyed_Bridge_0001.geometry}
              material={materials.Bridge}
            />
          </group>
          <mesh
            geometry={nodes.nature_Nature_0.geometry}
            material={materials.Nature}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.phantom_bridge_Magic_0.geometry}
            material={materials.Magic}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.terrain_Rocks_Terrain_0.geometry}
            material={materials.Rocks_Terrain}
            rotation={[Math.PI / 2, -1.57, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.water_Water_0.geometry}
            material={materials.Water}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload("/island.glb");

export default Island;
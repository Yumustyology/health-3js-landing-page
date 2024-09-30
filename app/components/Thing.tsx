"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const Thing = () => {
  const boxRef = useRef<any>();
  const sphereRef = useRef<any>();
  const capsuleRef = useRef<any>();
  const torusRef = useRef<any>();

  useFrame(() => {
    boxRef.current.rotation.x = boxRef.current.rotation.y += 0.01;
    sphereRef.current.rotation.x = sphereRef.current.rotation.y += 0.02;
    capsuleRef.current.rotation.y = sphereRef.current.rotation.y += 0.02;
    torusRef.current.rotation.y = sphereRef.current.rotation.y += 0.02;
  });

  return (
    <>
      {/* Box Geometry */}
      <mesh ref={boxRef} position={[-4, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial wireframe />
      </mesh>

      {/* Sphere Geometry */}
      <mesh ref={sphereRef} position={[0.5, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshNormalMaterial wireframe />
      </mesh>

      {/* Capsule Geometry */}
      <mesh ref={capsuleRef} position={[4, 0, 0]}>
        <capsuleGeometry args={[]} />
        <meshNormalMaterial wireframe />
      </mesh>

      {/* Torus (Doughnut) Geometry */}
      <mesh ref={torusRef} position={[8, 0, 0]}>
        <torusGeometry args={[1.5, 0.5, 16, 100]} />
        <meshNormalMaterial wireframe />
        <meshStandardMaterial color={"orange"} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
      </mesh>
    </>
  );
};

function ThingScene() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <Thing />
      <color args={["#080406"]} attach={"background"} />
      <OrbitControls />
    </Canvas>
  );
}

export default ThingScene;

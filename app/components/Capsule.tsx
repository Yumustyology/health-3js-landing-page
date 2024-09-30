"use client";
import {
  Capsule,
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import DNA from "./DNA";
import Particles from "./Particles";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  HueSaturation,
  SMAA,
  Vignette,
} from "@react-three/postprocessing";
import CameraRig from "./CameraRig";

const CapsuleThing = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 7] }}
      gl={{antialias:false, alpha: false}}
      dpr={1}
    >
      <color args={["#d1e2ef"]} attach={"background"} />
      <Suspense>
        <Float rotation={[-0.8, 0, -Math.PI / 2.5]} floatIntensity={4} rotationIntensity={4}>
          <Capsule args={[0.9, 2.5, 4, 32]}>
            <MeshTransmissionMaterial
              thickness={0.25}
              ior={1.2}
              anisotropicBlur={3}
              clearcoat={1}
              roughness={0.15}
              metalness={0.1}
              anisotropy={1.5}
              chromaticAberration={0.6}
            />
          </Capsule>
          <DNA scale={0.105} position={[0, -1.7, -0.0]} />
        </Float>
        <Environment preset="city" environmentIntensity={3}>
          <Lightformer
            form={"rect"}
            intensity={1}
            position={[2, 3, 3]}
            scale={5}
          />
          <Lightformer
            form={"rect"}
            intensity={2}
            position={[-2, 3, -4]}
            scale={5}
          />
        </Environment>
        <Particles particlesCount={200} />
        <EffectComposer multisampling={2}>
          <SMAA />
          <Bloom
            mipmapBlur
            intensity={0.9}
            opacity={0.4}
            levels={9}
            luminanceSmoothing={0.1}
            luminanceThreshold={0.7}
          />
          <DepthOfField
            focalLength={0.15}
            bokehScale={16}
            focusDistance={0.0005}
            />
          <HueSaturation saturation={.3} hue={.15}/>
          <Vignette offset={0.65} opacity={0.4} />
        </EffectComposer>
        <Text
          font="/fonts/BigShouldersDisplay-Light.ttf"
          rotation={[0, 0, 0]}
          position={[0, 0, -2]}
          fontSize={6}
          color="#87a8c3"
          letterSpacing={-0.05}
        >
          HEALTH
        </Text>
      </Suspense>
      <CameraRig />
      <OrbitControls />
    </Canvas>
  );
};

export default CapsuleThing;

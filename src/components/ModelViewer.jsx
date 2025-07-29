import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ modelUrl, isUserInteracting }) {
  const ref = useRef();
  const { scene } = useGLTF(modelUrl);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        // Optional: override material for testing
        // child.material.color = new THREE.Color(0xffffff);
        // child.material.needsUpdate = true;
      }
    });
  }, [scene]);

  const scale = modelUrl.includes("treasure") ? 1.5 : 0.8;

  useFrame((state, delta) => {
    if (ref.current && !isUserInteracting) {
      ref.current.rotation.y += delta * 0.3;
      if (ref.current.rotation.y > Math.PI * 2) {
        ref.current.rotation.y -= Math.PI * 2;
      }
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={[0, 0, 0]}
      castShadow
      receiveShadow
    />
  );
}

const ModelViewer = ({ modelUrl }) => {
  const controlsRef = useRef();
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const onStart = () => setIsUserInteracting(true);
    const onEnd = () => setIsUserInteracting(false);

    controls.addEventListener("start", onStart);
    controls.addEventListener("end", onEnd);

    return () => {
      controls.removeEventListener("start", onStart);
      controls.removeEventListener("end", onEnd);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 50 }}
      style={{ width: "100%", height: "400px" }}
    >
      <ambientLight intensity={2.0} />
      <hemisphereLight skyColor="white" groundColor="black" intensity={10.5} />

      <directionalLight castShadow position={[5, 10, 7]} intensity={10} />
      <directionalLight castShadow position={[0, 5, -10]} intensity={5} />

      <pointLight position={[-10, 0, 0]} intensity={3} />
      <pointLight position={[10, 0, 0]} intensity={3} />

      <Suspense fallback={null}>
        <Model modelUrl={modelUrl} isUserInteracting={isUserInteracting} />
      </Suspense>

      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
    </Canvas>
  );
};

export default ModelViewer;

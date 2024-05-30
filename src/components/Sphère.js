import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GeodesicSphere = ({ size = 2.2 }) => {
  const meshRef = useRef();
  const edgesRef = useRef();

  // Générer des vitesses de rotation aléatoires pour chaque axe
  const rotationSpeed = useMemo(() => ({
    x: Math.random() * 0.02 - 0.01,
    y: Math.random() * 0.02 - 0.01,
    z: Math.random() * 0.02 - 0.01
  }), []);

  useEffect(() => {
    if (edgesRef.current) {
      const geometry = new THREE.IcosahedronGeometry(size, 3);
      const edges = new THREE.EdgesGeometry(geometry);
      const lines = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0xffffff })
      );
      edgesRef.current.add(lines);
    }
  }, [size]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed.x; // Rotation aléatoire sur l'axe X
      meshRef.current.rotation.y += rotationSpeed.y; // Rotation aléatoire sur l'axe Y
      meshRef.current.rotation.z += rotationSpeed.z; // Rotation aléatoire sur l'axe Z
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x += rotationSpeed.x; // Rotation aléatoire sur l'axe X
      edgesRef.current.rotation.y += rotationSpeed.y; // Rotation aléatoire sur l'axe Y
      edgesRef.current.rotation.z += rotationSpeed.z; // Rotation aléatoire sur l'axe Z
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[size, 3]} />
        <meshStandardMaterial color={0xffd700} metalness={0.2} roughness={1} />
      </mesh>
      <group ref={edgesRef} />
    </>
  );
};

const Sphère = ({ size }) => {
  return (
    <Canvas style={{ background: 'transparent' }} gl={{ alpha: true }}> {/* Fond transparent */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} /> {/* Lumière directionnelle ajustée */}
      <GeodesicSphere size={size} />
      <OrbitControls enableZoom={false} /> {/* Désactive le zoom */}
    </Canvas>
  );
};

export default Sphère;

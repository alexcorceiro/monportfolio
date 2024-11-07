import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GeodesicSphere = ({ size = 3.2 }) => {
  const edgesRef = useRef();

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
        new THREE.LineBasicMaterial({ color: "#eeeff0" })
      );
      edgesRef.current.add(lines);
    }
  }, [size]);

  useFrame(() => {
    if (edgesRef.current) {
      edgesRef.current.rotation.x += rotationSpeed.x; 
      edgesRef.current.rotation.y += rotationSpeed.y; 
      edgesRef.current.rotation.z += rotationSpeed.z; 
    }
  });

  return <group ref={edgesRef} />;
};

const Sphère = ({ size }) => {
  return (
    <Canvas
      style={{ background: 'transparent', width: '100%', height: '20rem' }} 
      camera={{ position: [0, 0, 10], fov: 45 }} 
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <GeodesicSphere size={size} />
      <OrbitControls enableZoom={false} maxDistance={15} minDistance={7} />
    </Canvas>
  );
};

export default Sphère;

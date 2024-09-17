import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import "./css/Octogonce.css"
// Crée un shaderMaterial personnalisé
const LuminousMaterial = shaderMaterial(
  { uColor: new THREE.Color(0xffffff) },
  `uniform vec3 uColor;
   varying vec3 vNormal;
   void main() {
     vNormal = normalize(normalMatrix * normal);
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }`,
  `uniform vec3 uColor;
   varying vec3 vNormal;
   void main() {
     float intensity = pow(0.5 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
     gl_FragColor = vec4(uColor * intensity, 1.0);
   }`
);

extend({ LuminousMaterial });

const DraggableOctogonSphere = ({ lineWidth = 4 }) => {
  const meshRef = useRef();
  const lineRef = useRef();
  const isDragging = useRef(false);
  const rotationSpeed = useRef({
    x: Math.random() * 0.01,
    y: Math.random() * 0.01,
    z: Math.random() * 0.01,
  });

  useFrame(() => {
    if (isDragging.current) {
      const dragObject = meshRef.current;
      dragObject.updateMatrixWorld();
      const position = new THREE.Vector3();
      dragObject.localToWorld(position);
      meshRef.current.position.copy(position);
    } else {
      meshRef.current.rotation.x += rotationSpeed.current.x;
      meshRef.current.rotation.y += rotationSpeed.current.y;
      meshRef.current.rotation.z += rotationSpeed.current.z;
    }
  });

  useFrame(() => {
    lineRef.current.rotation.x += rotationSpeed.current.x;
    lineRef.current.rotation.y += rotationSpeed.current.y;
    lineRef.current.rotation.z += rotationSpeed.current.z;
  });

  const handlePointerDown = (event) => {
    event.stopPropagation();
    isDragging.current = true;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    isDragging.current = false;
  };

  const luminousMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0xffffff) }
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.5 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(uColor * intensity, 1.0);
      }
    `
  }), []);

  return (
    <>
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        material={luminousMaterial}
      >
        <dodecahedronGeometry args={[1.5, 0]} />
      </mesh>
      <lineSegments
        ref={lineRef}
        position={[0, 0, 0]}
      >
        <edgesGeometry args={[new THREE.DodecahedronGeometry(2.5, 0)]} />
        <lineBasicMaterial color='white' linewidth={lineWidth} />
      </lineSegments>
    </>
  );
};

const OctogonSphere = () => {
  return (
    <Canvas style={{ height: "30vh", width: "100%"}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={1} />
      <DraggableOctogonSphere />
      <OrbitControls enableZoom={false} /> {/* Désactive le zoom */}
    </Canvas>
  );
};

export default OctogonSphere;

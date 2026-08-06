import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Swirling spice particles inside the jar
function SwirlingSpiceParticles({ count = 80 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#D8A230'), // Turmeric
      new THREE.Color('#7B1F1F'), // Deep Red
      new THREE.Color('#5E7D43'), // Leaf Green
      new THREE.Color('#F6F1E7'), // Cream highlight
    ];

    for (let i = 0; i < count; i++) {
      // Cylinder distribution inside jar
      const r = Math.random() * 0.75;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.6;

      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = r * Math.sin(theta);

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    // Swirl particles around Y axis
    pointsRef.current.rotation.y = t * 0.4;
    pointsRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// 3D Glass Jar Object with brass lid
function GlassJarModel() {
  const jarRef = useRef();

  useFrame((state) => {
    if (!jarRef.current) return;
    const t = state.clock.getElapsedTime();
    jarRef.current.rotation.y = t * 0.25;
  });

  return (
    <group ref={jarRef} position={[0, -0.2, 0]}>
      {/* Outer Glass Body Cylinder */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 1.8, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.3}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          ior={1.4}
          color="#F6F1E7"
          roughness={0.08}
          metalness={0.05}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Swirling Spice Powder Core Inside */}
      <SwirlingSpiceParticles count={110} />

      {/* Spice Powder Mound Base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.7, 32]} />
        <meshStandardMaterial
          color="#D8A230"
          roughness={0.9}
          metalness={0.05}
          bumpScale={0.05}
        />
      </mesh>

      {/* Metallic Brass Lid */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[1.0, 1.0, 0.25, 32]} />
        <meshStandardMaterial
          color="#3A2417"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
      
      {/* Lid Rim Detail */}
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.08, 32]} />
        <meshStandardMaterial
          color="#D8A230"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export function SpiceJar({ splineUrl, className = '' }) {
  return (
    <div className={`relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center ${className}`}>
      {/* Glow backdrop ring */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#D8A230]/20 blur-3xl -z-10 pointer-events-none animate-pulse" />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} color="#F6F1E7" />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#F6F1E7" />
        <directionalLight position={[-5, -2, -4]} intensity={0.6} color="#D8A230" />
        <pointLight position={[0, 2, 3]} intensity={1.2} color="#7B1F1F" />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <GlassJarModel />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SpiceJar;

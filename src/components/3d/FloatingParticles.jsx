import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PALETTE = [
  '#D8A230', // Turmeric
  '#7B1F1F', // Deep Red
  '#5E7D43', // Leaf Green
  '#3A2417', // Dark Brown accent
];

export function FloatingParticles({ count = 10 }) {
  const groupRef = useRef();

  // Generate deterministic particles with varied shapes, positions, speeds, colors
  const particles = useMemo(() => {
    // Pre-set organic positions spread around the perimeter & depth
    const positions = [
      [-5.5, 2.2, -3.5],
      [4.8, 3.1, -4.0],
      [5.2, -1.8, -2.8],
      [-4.2, -2.5, -4.5],
      [0.8, 3.8, -5.0],
      [-6.5, -0.5, -3.0],
      [6.2, 0.8, -3.2],
      [-1.8, -3.6, -4.2],
      [3.0, -3.8, -5.2],
      [1.5, 2.8, -4.8],
    ];

    return Array.from({ length: count }, (_, i) => {
      const isTorus = i % 2 === 0;
      const color = PALETTE[i % PALETTE.length];
      const scale = 0.35 + (i % 3) * 0.15; // Refined scale

      const [x, y, z] = positions[i % positions.length];

      const speedX = 0.2 + (i % 3) * 0.15;
      const speedY = 0.25 + (i % 4) * 0.1;
      const rotSpeedX = (i % 2 === 0 ? 1 : -1) * (0.3 + (i % 3) * 0.2);
      const rotSpeedY = (i % 2 === 0 ? -1 : 1) * (0.3 + (i % 4) * 0.2);

      return {
        id: i,
        isTorus,
        color,
        scale,
        initialPos: [x, y, z],
        speedX,
        speedY,
        rotSpeedX,
        rotSpeedY,
        roughness: 0.25 + (i % 3) * 0.2,
        metalness: 0.1 + (i % 2) * 0.25,
      };
    });
  }, [count]);

  // Animate particles in frame loop
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Gentle global sway
    groupRef.current.rotation.y = Math.sin(t * 0.04) * 0.1;
    groupRef.current.rotation.x = Math.cos(t * 0.03) * 0.05;

    // Animate individual meshes
    groupRef.current.children.forEach((child, idx) => {
      const p = particles[idx];
      if (!p) return;

      // Floating sine/cosine motion
      child.position.y = p.initialPos[1] + Math.sin(t * p.speedY + p.id * 1.5) * 0.3;
      child.position.x = p.initialPos[0] + Math.cos(t * p.speedX + p.id * 1.2) * 0.25;

      // Smooth rotation
      child.rotation.x += p.rotSpeedX * 0.008;
      child.rotation.y += p.rotSpeedY * 0.008;
    });
  });


  return (
    <group ref={groupRef}>
      {particles.map((p) => (
        <mesh key={p.id} position={p.initialPos} scale={[p.scale, p.scale, p.scale]}>
          {p.isTorus ? (
            <torusGeometry args={[0.8, 0.3, 16, 32]} />
          ) : (
            <sphereGeometry args={[0.7, 32, 32]} />
          )}
          <meshStandardMaterial
            color={p.color}
            roughness={p.roughness}
            metalness={p.metalness}
            envMapIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

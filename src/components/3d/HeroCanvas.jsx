import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { FloatingParticles } from './FloatingParticles';

function CanvasLoader() {
  return null;
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-85">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.65} color="#F6F1E7" />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#F6F1E7" />
        <directionalLight position={[-8, -5, -5]} intensity={0.6} color="#D8A230" />
        <pointLight position={[0, 4, 3]} intensity={0.8} color="#7B1F1F" />
        
        <Suspense fallback={<CanvasLoader />}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
            <FloatingParticles count={9} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

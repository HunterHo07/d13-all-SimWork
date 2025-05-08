'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Environment, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { useMouseFollow, useFloating, usePulse } from '@/hooks/use-three';

// Hexagon grid component
function HexagonGrid({ count = 20, radius = 10, color = '#4f46e5' }) {
  const hexagons = useRef<THREE.Mesh[]>([]);
  const group = useRef<THREE.Group>(null);

  // Create hexagon geometry
  const hexGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 6);

  // Create material with glow effect
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    emissive: new THREE.Color(color),
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.7,
  });

  // Generate positions
  useEffect(() => {
    if (group.current) {
      // Clear existing hexagons
      while (group.current.children.length > 0) {
        group.current.remove(group.current.children[0]);
      }

      // Create new hexagons
      for (let i = 0; i < count; i++) {
        const mesh = new THREE.Mesh(hexGeometry, material);

        // Random position within radius
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * radius;
        mesh.position.set(
          Math.cos(angle) * r,
          (Math.random() - 0.5) * 5,
          Math.sin(angle) * r
        );

        // Random rotation
        mesh.rotation.x = Math.PI / 2;
        mesh.rotation.z = Math.random() * Math.PI;

        // Random scale
        const scale = 0.5 + Math.random() * 1.5;
        mesh.scale.set(scale, scale, scale);

        group.current.add(mesh);
        hexagons.current.push(mesh);
      }
    }
  }, [count, radius, color]);

  // Animate hexagons
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.05;

      // Animate individual hexagons
      hexagons.current.forEach((hex, i) => {
        hex.position.y = Math.sin(clock.getElapsedTime() * 0.5 + i) * 0.5 + hex.position.y * 0.99;
        hex.rotation.z += 0.001;
      });
    }
  });

  return <group ref={group} />;
}

// Simple office building model
function OfficeModel() {
  const meshRef = useFloating(0.2, 0.5);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Base building */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5, 3, 5]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#4338ca"
          emissiveIntensity={0.2}
          transparent={true}
          opacity={0.9}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[5.5, 0.5, 5.5]} />
        <meshStandardMaterial
          color="#4338ca"
          emissive="#4338ca"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.9}
        />
      </mesh>

      {/* Windows */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <mesh key={`window-front-${i}`} position={[x, 0.5, 2.51]}>
          <planeGeometry args={[0.8, 1.2]} />
          <meshStandardMaterial
            color="#88ccff"
            emissive="#88ccff"
            emissiveIntensity={0.5}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
      ))}

      {[-1.5, 0, 1.5].map((x, i) => (
        <mesh key={`window-back-${i}`} position={[x, 0.5, -2.51]}>
          <planeGeometry args={[0.8, 1.2]} />
          <meshStandardMaterial
            color="#88ccff"
            emissive="#88ccff"
            emissiveIntensity={0.5}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
      ))}

      {[-1.5, 0, 1.5].map((z, i) => (
        <mesh key={`window-left-${i}`} position={[-2.51, 0.5, z]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.8, 1.2]} />
          <meshStandardMaterial
            color="#88ccff"
            emissive="#88ccff"
            emissiveIntensity={0.5}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
      ))}

      {[-1.5, 0, 1.5].map((z, i) => (
        <mesh key={`window-right-${i}`} position={[2.51, 0.5, z]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.8, 1.2]} />
          <meshStandardMaterial
            color="#88ccff"
            emissive="#88ccff"
            emissiveIntensity={0.5}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
      ))}

      {/* Door */}
      <mesh position={[0, -0.5, 2.51]}>
        <planeGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#333333"
          emissive="#4338ca"
          emissiveIntensity={0.1}
          transparent={true}
          opacity={0.9}
        />
      </mesh>
    </mesh>
  );
}

// Glowing orb
function GlowingOrb({ position = [0, 0, 0], color = '#4f46e5', size = 1 }) {
  const meshRef = usePulse(0.9, 1.1, 3);

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

// Main scene component
function Scene() {
  const mouseRef = useMouseFollow(0.2, 0.1);
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 5, 15);
  }, [camera]);

  return (
    <group ref={mouseRef}>
      <HexagonGrid count={50} radius={15} color="#4f46e5" />

      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <OfficeModel />
      </Float>

      <GlowingOrb position={[5, 3, -2]} color="#3b82f6" size={0.5} />
      <GlowingOrb position={[-4, 2, 3]} color="#8b5cf6" size={0.7} />
      <GlowingOrb position={[0, 6, 0]} color="#4f46e5" size={1} />

      <Sparkles
        count={100}
        scale={20}
        size={2}
        speed={0.3}
        color="#ffffff"
      />

      <Text
        position={[0, 8, 0]}
        fontSize={1.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        SimulEx
      </Text>

      <Text
        position={[0, 6.5, 0]}
        fontSize={0.6}
        color="#a5b4fc"
        anchorX="center"
        anchorY="middle"
      >
        The Future of Work Simulation
      </Text>

      <Environment preset="city" />
    </group>
  );
}

// Export the full canvas component
export function HeroScene() {
  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 15], fov: 50 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#030712']} />
        <fog attach="fog" args={['#030712', 5, 30]} />
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}

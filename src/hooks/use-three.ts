'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

/**
 * Custom hook for rotating an object
 */
export function useRotation(speed: number = 0.01) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed;
    }
  });
  
  return meshRef;
}

/**
 * Custom hook for floating animation
 */
export function useFloating(
  amplitude: number = 0.1,
  frequency: number = 1
) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = useRef<number | null>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      if (initialY.current === null) {
        initialY.current = meshRef.current.position.y;
      }
      
      meshRef.current.position.y = 
        (initialY.current || 0) + 
        Math.sin(clock.getElapsedTime() * frequency) * amplitude;
    }
  });
  
  return meshRef;
}

/**
 * Custom hook for mouse follow effect
 */
export function useMouseFollow(
  intensity: number = 0.1,
  lerp: number = 0.1
) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useFrame(() => {
    if (meshRef.current) {
      // Apply lerp for smooth movement
      meshRef.current.rotation.x += (mousePosition.y * intensity - meshRef.current.rotation.x) * lerp;
      meshRef.current.rotation.y += (mousePosition.x * intensity - meshRef.current.rotation.y) * lerp;
    }
  });
  
  return meshRef;
}

/**
 * Custom hook for pulsing effect
 */
export function usePulse(
  minScale: number = 0.95,
  maxScale: number = 1.05,
  duration: number = 2
) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 
        minScale + 
        (Math.sin(clock.getElapsedTime() * (Math.PI / duration)) + 1) / 2 * 
        (maxScale - minScale);
      
      meshRef.current.scale.set(scale, scale, scale);
    }
  });
  
  return meshRef;
}

/**
 * Custom hook for particle system
 */
export function useParticles(
  count: number = 100,
  radius: number = 10,
  size: number = 0.05,
  color: string = '#ffffff'
) {
  const [particles, setParticles] = useState<THREE.Vector3[]>([]);
  
  useEffect(() => {
    const tempParticles: THREE.Vector3[] = [];
    
    for (let i = 0; i < count; i++) {
      // Random position within a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      tempParticles.push(new THREE.Vector3(x, y, z));
    }
    
    setParticles(tempParticles);
  }, [count, radius]);
  
  return { particles, size, color };
}

/**
 * Custom hook for shader material
 */
export function useShaderMaterial(
  vertexShader: string,
  fragmentShader: string,
  uniforms: Record<string, THREE.IUniform> = {}
) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // Update time uniform if it exists
  useFrame(({ clock }) => {
    if (materialRef.current && uniforms.time) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });
  
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      ...uniforms,
      time: { value: 0 }
    }
  });
  
  return { material, materialRef };
}

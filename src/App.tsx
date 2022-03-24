/* no-eslint-disable */
// import * as THREE from 'three';
import React from 'react';
import { Canvas } from '@react-three/fiber';

import Box from './components/Box';

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-2, 0, 0]} dims={[1, 1, 1]} />
      <Box position={[2, 0, 0]} dims={[1, 1, 1]} />
      <Box position={[0, 0, 0]} dims={[1.5, 1, 2]} chameleon={true} />
    </Canvas>
  )
}

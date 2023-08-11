import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import "./example.css";
export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => generateRandomPoints(5000, 1.5));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#F5F5F5"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function generateRandomPoints(count, radius) {
  const positions = [];

  for (let i = 0; i < count; i++) {
    const x = (Math.random() * 2 - 1) * radius;
    const y = (Math.random() * 2 - 1) * radius;
    const z = (Math.random() * 2 - 1) * radius;
    positions.push(x, y, z);
  }

  return new Float32Array(positions);
}

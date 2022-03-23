import { OrbitControls, Stars, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

export default function HeroCanvas() {
  return (
    <Canvas className="canvas">
      <OrbitControls 
       autoRotate autoRotateSpeed={0.5}
      />
      <Suspense fallback={null}>
        <perspectiveCamera
          fov={60}
          aspect={sizes.width / sizes.height}
          position={[0, 0, 0]}
          near={0.1}
          far={300}
        >
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <Text
            color={'#F3F3F3'}
            fontSize={16}
            font="./Spartan-Regular.ttf"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.04}
            position={[0, 25, -50]}
            rotation={[0, 0, 0]}
            >
                React
            </Text>
            
            <Text
            color={'#F3F3F3'}
            fontSize={8}
            font="./Spartan-Regular.ttf"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.04}
            position={[50, -20, 0]}
            rotation={[0, 4.5, 0]}
            >
                TypeScript
            </Text>
                        
            <Text
            color={'#F3F3F3'}
            fontSize={8}
            font="./Spartan-Regular.ttf"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.04}
            position={[0, 20, 50]}
            rotation={[0, 9, 0]}
            >
                Redux
            </Text>

            <Text
            color={'#F3F3F3'}
            fontSize={8}
            font="./Spartan-Regular.ttf"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.04}
            position={[-50, -20, 0]}
            rotation={[0, 1.25, 0]}
            >
                Three.js
            </Text>
        </perspectiveCamera>
      </Suspense>
      <ambientLight />
    </Canvas>
  );
}

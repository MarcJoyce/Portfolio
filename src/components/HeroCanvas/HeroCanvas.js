import * as THREE from "three";
import React, { useMemo, useRef, useLayoutEffect, Suspense, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Spartan from './Spartan_Regular.typeface.json'
import { OrbitControls, Stars } from "@react-three/drei";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default function HeroCanvas() {
  return (
    <Canvas className="canvas">
      <OrbitControls
      //  autoRotate autoRotateSpeed={0.5}
      />
      <Suspense fallback={null}>
        <orthographicCamera
          fov={60}
          aspect={sizes.width / sizes.height}
          position={[0, 0, 0]}
          near={0.1}
          far={300}
        >
          <Stars
            radius={100}
            depth={50}
            count={1000}
            factor={5}
            saturation={0}
            fade
          />
          <Text position={[0, -1.85, 0]} children="React | Typescript" size={0.33} />
        </orthographicCamera>
      </Suspense>
      <ambientLight />
    </Canvas>
  );
}

extend({ TextGeometry });

function Text({
  children,
  size = 1,
  color = "#FFFFFF",
  ...props
}) {
  const font = new FontLoader().parse(Spartan);
  const config = useMemo(
    () => ({
      font,
      size: size || 6,
      height: size * 0.25,
      curveSegments: 2,
      bevelEnabled: false,
      bevelThickness: 2,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1,
    }),
    [font, size]
  );
  const mesh = useRef();
  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    mesh.current.geometry.computeBoundingBox();
    mesh.current.geometry.boundingBox.getSize(size);
    mesh.current.geometry.center();
  }, []);

useEffect(() => {
  const size = new THREE.Vector3();
  mesh.current.geometry.computeBoundingBox();
  mesh.current.geometry.boundingBox.getSize(size);
  mesh.current.geometry.center();
  console.log('useEffect');
},[props])

  function deg2Rad(degree) {
    return degree * Math.PI / 180
  }

  useFrame(() => {
    if (mesh.current.rotation.y >= deg2Rad(90)) { 
      mesh.current.rotation.y = deg2Rad(-90)
    } else {
      mesh.current.rotation.y += deg2Rad(0.5)
    }
  })

  return (
    <group {...props}>
      <mesh ref={mesh}>
        <textGeometry args={[children, config]} />
        <meshBasicMaterial color={'#FFFFFF'} transparent opacity={0.25} wireframe/>
      </mesh>
    </group>
  );
}
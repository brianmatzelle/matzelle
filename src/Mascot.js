import React, { useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame, useThree, extend } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PerspectiveCamera } from "@react-three/drei";
const BlenderScene = () => {
  const gltf = useLoader(GLTFLoader, "/baxter/scene.gltf"); // Update this path to the exported glTF file
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [groupRef]);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = 0;  // Adjust these values for rotation
      groupRef.current.rotation.x = .4;  // Adjust these values for rotation
    }
  }, []);
  
  // Scale and position adjustments
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(0, -1.2, 0); // Adjust these values for position
      groupRef.current.scale.set(.09, .09, .09); // Adjust these values for scale
    }
  }, [groupRef]);

  // Optional: Rotate the model for better visibility
  let counter = 0;
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      counter++;
        if (counter % 100 === 0) {
            groupRef.current.rotation.z += 0.0001;
        }
    }

  });

  return (
    <group ref={groupRef}>
      {/* <primitive object={obj} /> */}
      <primitive object={gltf.scene} />
    </group>
  );
};

// Make OrbitControls available for react-three-fiber
extend({ OrbitControls });

const Controls = () => {
    const { camera, gl } = useThree();
    const controlsRef = useRef();
  
    useEffect(() => {
      if (controlsRef.current) {
        controlsRef.current.minDistance = 2; // Set the minimum distance for zooming in
        controlsRef.current.maxDistance = 5; // Set the maximum distance for zooming out
      }
    }, [controlsRef]);
  
    return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};
  

export default function Mascot() {
  return (
    <Canvas 
    style={{ 
      width: "40vw", 
      height: "50vh", 
      paddingLeft: '6vw' 
    }}
    >
      <PerspectiveCamera
        position={[0, 0, 10]} // Adjust these values for camera position
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <BlenderScene />
      <Controls />
    </Canvas>
  );
};
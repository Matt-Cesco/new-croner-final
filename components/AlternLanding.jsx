import Image from "next/image";
import trustpilotStars from "../public/images/stars-5-trustpilot.svg";
import ArchiConceptTwo from "../public/images/Front-Seating_final.webp";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => (mesh.current.rotation.x += 0.004));
  useFrame(() => (mesh.current.rotation.y += 0.004));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry attach="geometry" args={[2, 0]} />
      <meshStandardMaterial attachArray="material-4" color="yellow" />
      <meshBasicMaterial attachArray="material-0" color="red" />
      <meshBasicMaterial attachArray="material-1" color="green" />
      <meshStandardMaterial attachArray="material-2" color="blue" />
    </mesh>
  );
}


const LandingPage = () => {
  return (
    <>
      <div className="w-full bg-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <div className="flex justify-start">
            <div className="flex flex-col justify-start max-w-3xl py-28">
              <h5 className="text-base font-bold pb-3 text-yellow">
                All Under One Umbrella
              </h5>
              <h1 className="text-6xl font-bold text-white">
                HR, Employment Law and Health & Safety services
              </h1>
              <div className="flex items-center">
                <h5 className="text-base text-white max-w-xl">Excellent</h5>
                <div className="">
                  <Image
                    src={trustpilotStars}
                    alt="trust pilot"
                    height={20}
                    className="mx-4"
                  />
                </div>
                <h5 className="text-base text-white max-w-xl py-6">
                  1,655 reviews
                </h5>
              </div>
              <div className="flex flex-col md:flex-row justify-start pt-12">
                <div className="">
                  <button className="relative bg-red text-white px-14 py-4 font-semibold group">
                    <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-300 left-0 top-0 cursor-pointer"></span>
                    <span className="relative">Service & Pricing</span>
                  </button>
                </div>
                <div className="ml-6">
                  <button className="relative bg-red text-white px-14 py-4 font-semibold group">
                    <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-300 left-0 top-0 cursor-pointer"></span>
                    <span className="relative">Get a Free Consultation</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex max-w-6xl">
              <Canvas>
                <ambientLight />
                <pointLight intensity={2.5} position={[10, 10, 10]} />
                <Box />
                <OrbitControls />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

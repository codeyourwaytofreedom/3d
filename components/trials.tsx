import t from "../styles/trials.module.css";
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from "react";
import drop from "../public/drop.png";
import { useRef } from "react";
import * as THREE from 'three'
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment, useTexture } from '@react-three/drei';
//import Model from "../public/Shoe.js";
import Model from "../public/Model.jsx";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Test from "../public/test.js";
const Trials = () => {    
    
    return (         
        <div className={t.trials}>
            <div className={t.trials_canvas}>
                <Canvas className={t.canvas}>
                
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.1} />
                        {/* <Model/> */}
                        <Test/>
                        
                        <spotLight intensity={0.5} angle={0.9} penumbra={1} position={[10,15,10]} castShadow/>
                        <OrbitControls 
                            enablePan={true} 
                            /* maxDistance={15} 
                            minDistance={10}  */
                            /* target={[2,0,0]} 
                            minPolarAngle={Math.PI/2}
                            maxPolarAngle={Math.PI/2} */
                        />
                    </Suspense>
                </Canvas>
            </div>
        </div>
     );
}
 
export default Trials;
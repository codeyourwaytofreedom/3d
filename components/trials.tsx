import t from "../styles/trials.module.css";
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from "react";
import drop from "../public/drop.png";
import { useRef } from "react";
import * as THREE from 'three'
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment, useTexture } from '@react-three/drei';
import Shoe from "../public/Shoe.js";
//import Model from "../public/Model.jsx";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Test from "../public/test.js";
import { Geometry, Base, Addition, Subtraction } from '@react-three/csg'
import Text from "../public/Text.jsx";

const Trials = () => {    
    const boxGeometry = new THREE.BoxGeometry()
    function CrossGeometry() {
    return (
        <Geometry>
        <Base geometry={boxGeometry} scale={[2, 0.5, 0.5]} />
        <Addition geometry={boxGeometry} scale={[0.5, 2, 0.5]} />
        </Geometry>
    )
    }
    const [active_color, setActive] = useState(null)
    return (         
        <div className={t.trials} /* style={{backgroundColor:active_color}} */>
            <div className={t.trials_canvas}>
                <h1>Active Color is : {active_color}</h1>
                <Canvas className={t.canvas}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.3} />
                        {/* <Test/> */}
                        {/* <mesh scale={3} onPointerDown={(event)=> event.stopPropagation()}>
                            <sphereGeometry args={[1, 32, 32]} />
                            <meshStandardMaterial color={active_color}/>
                        </mesh> */}
{/*                         <mesh  position={[0,0,3.4]} rotation={[0,0,0.8]} scale={1} onPointerDown={()=> setActive("skyblue")}>
                            <CrossGeometry />
                            <meshStandardMaterial color="skyblue" />
                        </mesh>    
                        <mesh position={[0,0,-3.4]} rotation={[0,0,0.8]} scale={1} onPointerDown={()=> setActive("red")}>
                            <CrossGeometry/>
                            <meshStandardMaterial color="red" />
                        </mesh>  
                        <mesh position={[-2,0,-2.7]} rotation={[0,0.7,0.8]} scale={1} onPointerDown={()=> setActive("purple")}>
                            <CrossGeometry/>
                            <meshStandardMaterial color="purple" />
                        </mesh>      
                        <mesh position={[2.1,0,-2.55]} rotation={[0,-0.7,0.8]} scale={1} onPointerDown={()=> setActive("black")}>
                            <CrossGeometry/>
                            <meshStandardMaterial color="black" />
                        </mesh>          
                        <mesh position={[2.1,0,2.5]} rotation={[0,0.8,0.8]} scale={1} onPointerDown={()=> setActive("gold")}>
                            <CrossGeometry/>
                            <meshStandardMaterial color="gold" />
                        </mesh>    
                        <mesh position={[3.2,0,0.2]} rotation={[0,1.6,0.8]} scale={1} onPointerDown={()=> setActive("blue")}>
                            <CrossGeometry/>
                            <meshStandardMaterial color="blue" />
                        </mesh>    
                        <mesh position={[-3.2,0,0.2]} rotation={[0,1.6,0.8]} scale={1} onPointerDown={()=> setActive("white")}>
                            <CrossGeometry/>
                            <meshStandardMaterial color="white" />
                        </mesh> 
                        <mesh position={[-2.2,0,2.5]} rotation={[0,-0.8,0.8]} scale={1} onPointerDown={()=> setActive("darkgreen")}>
                            <CrossGeometry/>
                            <meshStandardMaterial color="darkgreen" />
                        </mesh>  */}
                        <Text/>

                        
                        <spotLight intensity={0.5} angle={0.9} penumbra={1} position={[10,15,10]} castShadow/>
                        <OrbitControls 
                            enablePan={true} 
                            maxDistance={15} 
                            minDistance={10}  
                            /* target={[2,0,0]}  */
                            minPolarAngle={Math.PI/2}
                            maxPolarAngle={Math.PI/2} 
                        />
                    </Suspense>
                </Canvas>
            </div>
        </div>
     );
}
 
export default Trials;
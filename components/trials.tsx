import t from "../styles/trials.module.css";
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react";
import drop from "../public/drop.png";
import { useRef } from "react";
import * as THREE from 'three'
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment } from '@react-three/drei';
import Model from "../public/Shoe.js";

const Trials = () => {    
    return ( 
        <div className={t.trials}>
            <div className={t.trials_canvas}>
                <Canvas className={t.canvas} >
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.1} />
                        <Model/>
                        <spotLight intensity={0.3} angle={0.9} penumbra={1} position={[10,15,10]} castShadow/>
                        <OrbitControls enablePan={true}/>
                    </Suspense>
                </Canvas>
            </div>
               
            
        </div>
     );
}
 
export default Trials;
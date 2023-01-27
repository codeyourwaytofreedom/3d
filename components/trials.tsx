import t from "../styles/trials.module.css";
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react";
import drop from "../public/drop.png";
import { useRef } from "react";
import * as THREE from 'three'
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment } from '@react-three/drei';

const Trials = () => {    
    function Model({ ...props }) {
        const group = useRef()
        const { nodes, materials } = useGLTF('shoe.gltf')
        return (
          <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
            <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
            <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
            <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
            <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
            <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
            <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
            <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
          </group>
        )
      }
    return ( 
        <div className={t.trials}>
            
                <Canvas >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.1} />
                    <Model/>
                    <directionalLight color="red" position={[-2, 0, 5]} />

                    {/* <mesh visible userData={{ hello: 'world' }} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="hotpink" transparent />
                    </mesh> */}
                    </Suspense>
                </Canvas>
            
        </div>
     );
}
 
export default Trials;
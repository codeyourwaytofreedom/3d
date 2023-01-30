
import { useTexture } from '@react-three/drei';
import * as THREE from 'three'
import { Geometry, Base, Addition, Subtraction } from '@react-three/csg'


const Ball = () => {
    const texture = useTexture('aa.jpeg')
    return ( 
            <mesh scale={3.7} onPointerDown={(event)=> event.stopPropagation()} position={[0,2.5,0]} >
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={texture}/>
            </mesh>
     );
}
 
export default Ball;
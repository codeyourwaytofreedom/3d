
import { useTexture } from '@react-three/drei';
import * as THREE from 'three'
import { Geometry, Base, Addition, Subtraction } from '@react-three/csg'


const Test = () => {
    const texture = useTexture('bricks.jpeg')
    return ( 
            <mesh scale={3}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={texture}/>
            </mesh>
     );
}
 
export default Test;
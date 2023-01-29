
import { useTexture } from '@react-three/drei';
import * as THREE from 'three'
import { Geometry, Base, Addition, Subtraction } from '@react-three/csg'

const boxGeometry = new THREE.BoxGeometry()
function CrossGeometry() {
  return (
    <Geometry>
      <Base geometry={boxGeometry} scale={[2, 0.5, 0.5]} />
      <Addition geometry={boxGeometry} scale={[0.5, 2, 0.5]} />
    </Geometry>
  )
}

const Test = () => {
    const texture = useTexture('bricks.jpeg')
    return ( 
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={texture}/>
            </mesh>
     );
}
 
export default Test;
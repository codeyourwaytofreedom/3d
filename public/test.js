
import { useTexture } from '@react-three/drei';


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
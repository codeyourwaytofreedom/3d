
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null} scale={3}>
      <group position={[0.5, 0, -0.5]} /* rotation={[Math.PI / 2, 0, Math.PI / 4]} */>
        <mesh geometry={nodes.body.geometry} material={nodes.body.material} />
        <mesh geometry={nodes.light.geometry} material={nodes.light.material} />
        <mesh geometry={nodes.button.geometry} material={nodes.button.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')

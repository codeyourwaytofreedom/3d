

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Text (props) {
  const { nodes, materials } = useGLTF('/text.gltf')
  const size = 0.05;
  return (
    <group {...props} dispose={null}>
{/*       <mesh geometry={nodes['3D_Text_-_F'].geometry} material={materials['Floral Scent']} position={[-0.1, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_r'].geometry} material={materials['Floral Scent']} position={[-0.07, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_r_1'].geometry} material={materials['Floral Scent']} position={[0.03, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_e'].geometry} material={materials['Floral Scent']} position={[-0.06, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_e_1'].geometry} material={materials['Floral Scent']} position={[-0.03, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_e_2'].geometry} material={materials['Floral Scent']} position={[0.03, 0.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_d'].geometry} material={materials['Floral Scent']} position={[-0.01, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_d_1'].geometry} material={materials['Floral Scent']} position={[0, 0.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_o'].geometry} material={materials['Floral Scent']} position={[0.02, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_o_1'].geometry} material={materials['Floral Scent']} position={[-0.01, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_o_2'].geometry} material={materials['Floral Scent']} position={[-0.02, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_o_3'].geometry} material={materials['Floral Scent']} position={[-0.03, 0.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_m'].geometry} material={materials['Floral Scent']} position={[0.05, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_t'].geometry} material={materials['Floral Scent']} position={[-0.02, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_W'].geometry} material={materials['Floral Scent']} position={[-0.05, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_a'].geometry} material={materials['Floral Scent']} position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_y'].geometry} material={materials['Floral Scent']} position={[0.02, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_Y'].geometry} material={materials['Floral Scent']} position={[-0.05, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_u'].geometry} material={materials['Floral Scent']} position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} /> */}
      <mesh geometry={nodes['3D_Text_-_C'].geometry} material={materials['Floral Scent']} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_o_1'].geometry} material={materials['Floral Scent']} position={[1, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />
      <mesh geometry={nodes['3D_Text_-_d_1'].geometry} material={materials['Floral Scent']} position={[2, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={size} />


    </group>
  )
}

useGLTF.preload('/text.gltf')

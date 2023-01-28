
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
export default function Model({ ...props }) {
  const group = useRef()
  
  const [rotation, setRotation] = useState()
  useEffect(() => {
    setRotation({x:group.current.rotation.x, y:group.current.rotation.y, z:group.current.rotation.z})
    group.current.rotation.z = 20;
  }, []);

  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={"gold"}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={"black"}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={"gold"}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={"gold"}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

useGLTF.preload('/shoe.gltf')

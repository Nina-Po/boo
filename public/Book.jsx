/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 book.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/book.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['uploads_files_2619168_BOOK+FINAL'].geometry} material={materials.lambert4SG} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/book.glb')

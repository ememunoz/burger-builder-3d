/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 tomato.gltf --transform -t
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_1: THREE.Mesh
    Object_1_1: THREE.Mesh
  }
  materials: {
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
  }
}

export function TomatoMesh(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    './assets/burger/tomato-transformed.glb'
  ) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_1.geometry}
        material={materials['Material.004']}
      />
      <mesh
        geometry={nodes.Object_1_1.geometry}
        material={materials['Material.009']}
      />
    </group>
  )
}

useGLTF.preload('./assets/burger/tomato-transformed.glb')
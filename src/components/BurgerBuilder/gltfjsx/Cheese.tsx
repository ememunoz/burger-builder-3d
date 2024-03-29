/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 cheese.gltf --transform -t
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    cheese: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export function CheeseMesh(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    './assets/burger/cheese-transformed.glb'
  ) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cheese.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('./assets/burger/cheese-transformed.glb')

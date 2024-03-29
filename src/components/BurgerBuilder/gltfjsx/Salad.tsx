/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 salad.gltf --transform -t
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    salad: THREE.Mesh
  }
  materials: {
    ['Material.005']: THREE.MeshStandardMaterial
  }
}

export function SaladMesh(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    './assets/burger/salad-transformed.glb'
  ) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.salad.geometry}
        material={materials['Material.005']}
      />
    </group>
  )
}

useGLTF.preload('./assets/burger/salad-transformed.glb')

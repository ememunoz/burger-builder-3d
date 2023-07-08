/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 bottomBun.gltf --transform -t
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    bottomBun: THREE.Mesh
  }
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial
  }
}

export function BottomBumMesh(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    './assets/burger/bottomBun-transformed.glb'
  ) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.bottomBun.geometry}
        material={materials['Material.006']}
      />
    </group>
  )
}

useGLTF.preload('./assets/burger/bottomBun-transformed.glb')

import { useCursor } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useState } from 'react'

import { BottomBumMesh } from './gltfjsx/BottomBun'
import { CheeseMesh } from './gltfjsx/Cheese'
import { SaladMesh } from './gltfjsx/Salad'
import { SteakMesh } from './gltfjsx/Steak'
import { TomatoMesh } from './gltfjsx/Tomato'
import { TopBunMesh } from './gltfjsx/TopBun'

type Props = {
  positionY?: number
  onDoubleClick?: (e: ThreeEvent<MouseEvent>) => void
}

const RESTITUTION = 0.1
const ANGULAR_DAMPING = 10
const LINEAR_DAMPING = 2

export const BottomBun = ({ positionY = 0, onDoubleClick }: Props) => (
  <RigidBody
    colliders={false}
    position={[0, positionY, 0]}
    type="fixed"
    restitution={0}
    friction={1}
    linearDamping={10}
    angularDamping={10}
  >
    <CuboidCollider args={[0.5, 0.1, 0.8]} position={[0, 0.09, 0]} />
    <BottomBumMesh onDoubleClick={onDoubleClick} />
  </RigidBody>
)

export const Tomato = ({ positionY = 0, onDoubleClick }: Props) => {
  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)
  return (
    <RigidBody
      colliders={false}
      position={[0, positionY, 0]}
      restitution={RESTITUTION}
      friction={1}
      linearDamping={LINEAR_DAMPING}
      angularDamping={ANGULAR_DAMPING}
    >
      <CuboidCollider args={[0.5, 0.06, 0.8]} />
      <Select enabled={hovered}>
        <TomatoMesh
          onDoubleClick={onDoubleClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        />
      </Select>
    </RigidBody>
  )
}

export const Cheese = ({ positionY = 0, onDoubleClick }: Props) => {
  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)
  return (
    <RigidBody
      colliders={false}
      position={[0, positionY, 0]}
      restitution={RESTITUTION}
      friction={1}
      linearDamping={LINEAR_DAMPING}
      angularDamping={ANGULAR_DAMPING}
    >
      <CuboidCollider args={[0.5, 0.05, 0.8]} />
      <Select enabled={hovered}>
        <CheeseMesh
          onDoubleClick={onDoubleClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        />
      </Select>
    </RigidBody>
  )
}

export const TopBun = ({ positionY = 0 }: Props) => (
  <RigidBody
    colliders={false}
    position={[0, positionY, 0]}
    restitution={0}
    friction={1}
    linearDamping={LINEAR_DAMPING}
    angularDamping={ANGULAR_DAMPING}
  >
    <CuboidCollider args={[0.5, 0.12, 0.8]} />
    <TopBunMesh />
  </RigidBody>
)

export const Salad = ({ positionY = 0, onDoubleClick }: Props) => {
  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)
  return (
    <RigidBody
      colliders={false}
      position={[0, positionY, 0]}
      restitution={RESTITUTION}
      friction={1}
      linearDamping={LINEAR_DAMPING}
      angularDamping={ANGULAR_DAMPING}
    >
      <CuboidCollider args={[0.5, 0.07, 0.8]} />
      <Select enabled={hovered}>
        <SaladMesh
          onDoubleClick={onDoubleClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        />
      </Select>
    </RigidBody>
  )
}

export const Steak = ({ positionY = 0, onDoubleClick }: Props) => {
  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)
  return (
    <RigidBody
      colliders={false}
      position={[0, positionY, 0]}
      restitution={RESTITUTION}
      friction={2}
      linearDamping={LINEAR_DAMPING}
      angularDamping={ANGULAR_DAMPING}
    >
      <CuboidCollider args={[0.5, 0.1, 0.8]} />
      <Select enabled={hovered}>
        <SteakMesh
          onDoubleClick={onDoubleClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        />
      </Select>
    </RigidBody>
  )
}

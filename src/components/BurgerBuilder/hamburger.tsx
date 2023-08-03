import { useCursor } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useState } from 'react'

import { BottomBumMesh } from './BottomBun'
import { CheeseMesh } from './Cheese'
import { SaladMesh } from './Salad'
import { SteakMesh } from './Steak'
import { TomatoMesh } from './Tomato'
import { TopBunMesh } from './TopBun'

type Props = {
  positionY?: number
  onClick?: (e: ThreeEvent<MouseEvent>) => void
}

const RESTITUTION = 0.2

export const BottomBun = ({ positionY = 0, onClick }: Props) => (
  <RigidBody
    colliders={false}
    position={[0, positionY, 0]}
    type="fixed"
    restitution={0}
    friction={1}
  >
    <CuboidCollider args={[0.5, 0.1, 0.8]} position={[0, 0.09, 0]} />
    <BottomBumMesh onClick={onClick} />
  </RigidBody>
)

export const Tomato = ({ positionY = 0, onClick }: Props) => {
  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)
  return (
    <RigidBody
      colliders={false}
      position={[0, positionY, 0]}
      restitution={RESTITUTION}
      friction={1}
    >
      <CuboidCollider args={[0.5, 0.06, 0.8]} />
      <Select enabled={hovered}>
        <TomatoMesh
          onClick={onClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        />
      </Select>
    </RigidBody>
  )
}

export const Cheese = ({ positionY = 0, onClick }: Props) => {
  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)
  return (
    <RigidBody
      colliders={false}
      position={[0, positionY, 0]}
      restitution={RESTITUTION}
      friction={1}
      angularDamping={4}
      linearDamping={0.2}
    >
      <CuboidCollider args={[0.5, 0.03, 0.8]} />
      <Select enabled={hovered}>
        <CheeseMesh
          onClick={onClick}
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
    angularDamping={4}
    linearDamping={0.2}
  >
    <CuboidCollider args={[0.5, 0.12, 0.8]} />
    <TopBunMesh />
  </RigidBody>
)

export const Salad = ({ positionY = 0, onClick }: Props) => {
  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)
  return (
    <RigidBody
      colliders={false}
      position={[0, positionY, 0]}
      restitution={RESTITUTION}
      friction={1}
      angularDamping={4}
      linearDamping={0.2}
    >
      <CuboidCollider args={[0.5, 0.07, 0.8]} />
      <Select enabled={hovered}>
        <SaladMesh
          onClick={onClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        />
      </Select>
    </RigidBody>
  )
}

export const Steak = ({ positionY = 0, onClick }: Props) => {
  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)
  return (
    <RigidBody
      colliders={false}
      position={[0, positionY, 0]}
      restitution={RESTITUTION}
      friction={2}
      angularDamping={4}
      linearDamping={0.2}
    >
      <CuboidCollider args={[0.5, 0.1, 0.8]} />
      <Select enabled={hovered}>
        <SteakMesh
          onClick={onClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        />
      </Select>
    </RigidBody>
  )
}

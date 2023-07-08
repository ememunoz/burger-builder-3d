import { CuboidCollider, RigidBody } from '@react-three/rapier'

import { BottomBumMesh } from './BottomBun'
import { CheeseMesh } from './Cheese'
import { SaladMesh } from './Salad'
import { SteakMesh } from './Steak'
import { TomatoMesh } from './Tomato'
import { TopBunMesh } from './TopBun'

type Props = {
  positionY?: number
}

export const BottomBun = ({ positionY = 0 }: Props) => (
  <RigidBody
    colliders={false}
    position={[0, positionY, 0]}
    type="fixed"
    restitution={0}
    friction={1}
  >
    <CuboidCollider args={[0.5, 0.1, 0.8]} position={[0, 0.09, 0]} />
    <BottomBumMesh />
  </RigidBody>
)

export const Tomato = ({ positionY = 0 }: Props) => (
  <RigidBody
    colliders={false}
    position={[0, positionY, 0]}
    restitution={0}
    friction={1}
  >
    <CuboidCollider args={[0.5, 0.03, 0.8]} />
    <TomatoMesh />
  </RigidBody>
)

export const Cheese = ({ positionY = 0 }: Props) => (
  <RigidBody
    colliders={false}
    position={[0, positionY, 0]}
    restitution={0}
    friction={1}
    angularDamping={4}
    linearDamping={0.2}
  >
    <CuboidCollider args={[0.5, 0.03, 0.8]} />
    <CheeseMesh />
  </RigidBody>
)

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

export const Salad = ({ positionY = 0 }: Props) => (
  <RigidBody
    colliders={false}
    position={[0, positionY, 0]}
    restitution={0.4}
    friction={1}
    angularDamping={4}
    linearDamping={0.2}
  >
    <CuboidCollider args={[0.5, 0.07, 0.8]} />
    <SaladMesh />
  </RigidBody>
)

export const Steak = ({ positionY = 0 }: Props) => (
  <RigidBody
    colliders={false}
    position={[0, positionY, 0]}
    restitution={0.4}
    friction={2}
    angularDamping={4}
    linearDamping={0.2}
  >
    <CuboidCollider args={[0.5, 0.1, 0.8]} />
    <SteakMesh />
  </RigidBody>
)

import { CuboidCollider, RigidBody } from '@react-three/rapier'

export const Bounds = () => {
  return (
    <RigidBody type="fixed">
      <CuboidCollider
        args={[0.1, 2, 1]}
        position={[-0.7, 2, 0]}
        restitution={0}
      />
      <CuboidCollider
        args={[0.1, 2, 1]}
        position={[0.7, 2, 0]}
        restitution={0}
      />
      <CuboidCollider
        args={[0.7, 2, 0.1]}
        position={[0, 2, 1]}
        restitution={0}
      />
      <CuboidCollider
        args={[0.7, 2, 0.1]}
        position={[0, 2, -1]}
        restitution={0}
      />
    </RigidBody>
  )
}

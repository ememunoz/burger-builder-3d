import { CuboidCollider, RigidBody } from '@react-three/rapier'

export const Bounds = () => {
  return (
    <RigidBody type="fixed">
      <CuboidCollider
        args={[0.1, 4, 1]}
        position={[-0.7, 4, 0]}
        restitution={0}
      />
      <CuboidCollider
        args={[0.1, 4, 1]}
        position={[0.7, 4, 0]}
        restitution={0}
      />
      <CuboidCollider
        args={[0.7, 4, 0.1]}
        position={[0, 4, 1]}
        restitution={0}
      />
      <CuboidCollider
        args={[0.7, 4, 0.1]}
        position={[0, 4, -1]}
        restitution={0}
      />
    </RigidBody>
  )
}

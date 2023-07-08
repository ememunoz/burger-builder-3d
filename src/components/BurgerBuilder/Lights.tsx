import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { DirectionalLight, DirectionalLightHelper } from 'three'

export const Lights = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const directionalLightRef = useRef<DirectionalLight>(null!)
  useHelper(directionalLightRef, DirectionalLightHelper, 1)
  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={[1, 3, 8]}
        intensity={1.5}
      />
      <ambientLight />
    </>
  )
}

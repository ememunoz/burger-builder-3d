// import { useHelper } from '@react-three/drei'
// import { useRef } from 'react'
// import { Color, DirectionalLight, DirectionalLightHelper } from 'three'
import { Color } from 'three'

const lightColor = new Color('hsl(44, 50%, 50%)')
export const Lights = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  // const directionalLightRef = useRef<DirectionalLight>(null!)
  // useHelper(directionalLightRef, DirectionalLightHelper, 1)
  return (
    <>
      <directionalLight
        // ref={directionalLightRef}
        position={[1, 0.5, 5]}
        intensity={1.5}
        color={lightColor}
      />
      <ambientLight />
    </>
  )
}

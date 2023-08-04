import { Color } from 'three'

const lightColor = new Color('hsl(44, 50%, 50%)')
export const Lights = () => {
  return (
    <>
      <directionalLight
        position={[1, 0.5, 5]}
        intensity={1.5}
        color={lightColor}
      />
      <ambientLight />
    </>
  )
}

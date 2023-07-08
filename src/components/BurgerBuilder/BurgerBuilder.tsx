import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'

import BurgerPreview from './BurgerPreview'
import { Lights } from './Lights'

export const BurgerBuilder = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <Lights />
        {/* <OrbitControls /> */}
        {/* <Float speed={2} rotationIntensity={2}>  */}
        <Suspense fallback={null}>
          <Physics>
            <BurgerPreview
              ingredients={[
                'salad',
                'steak',
                'tomato',
                'cheese',
                'salad',
                'steak',
                'tomato',
                'cheese',
                'steak',
                'salad',
                'cheese',
                'tomato',
                'topBun',
              ]}
            />
          </Physics>
        </Suspense>
        {/* </Float>  */}
      </Canvas>
    </Suspense>
  )
}

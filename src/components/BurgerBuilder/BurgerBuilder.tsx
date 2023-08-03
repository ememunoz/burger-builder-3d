import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense, useState } from 'react'
import { generateUUID } from 'three/src/math/MathUtils.js'

import { Ingredient, IngredientList } from '../../types/ingredients'
import Icon, { IconId } from '../Icon/Icon'
import BurgerPreview from './BurgerPreview'
import { IngredientButton } from './IngredientButton'
import { Lights } from './Lights'

const INGREDIENT_CONTROLS: Ingredient[] = ['steak', 'cheese', 'tomato', 'salad']

export const BurgerBuilder = () => {

  const [ingredients, setIngredients] =
    useState<IngredientList>([])

  const addIngredient = (type: Ingredient) => {
    const id = generateUUID();
    setIngredients(ingredients => [...ingredients, { id, name: type }])
  }
  const addIngredientFnBuilder = (type: Ingredient) => () => addIngredient(type)

  const removeIngredient = (id: string) => {
    setIngredients(ingredients => ingredients.filter(ingredient => ingredient.id !== id))
  }
  return (
    <div className='flex flex-col aspect-[9/15] md:w-1/2 md:mx-auto'>
      <Suspense fallback={null}>
        <Canvas>
          <Lights />
          <Suspense fallback={null}>
            <Physics>
              <BurgerPreview ingredients={ingredients} onRemoveIngredient={removeIngredient} />
            </Physics>
          </Suspense>
        </Canvas>
      </Suspense>
      <div className='flex flex-row h-11 my-8 gap-4'>
        {INGREDIENT_CONTROLS.map((ingredient) => (
          <IngredientButton
            key={ingredient}
            onClick={addIngredientFnBuilder(ingredient)}
          >
            <Icon id={ingredient as IconId} />
          </IngredientButton>
        ))}
      </div>
    </div>
  )
}

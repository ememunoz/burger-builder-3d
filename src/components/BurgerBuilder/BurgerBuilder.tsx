/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { MouseEventHandler, Suspense, useState } from 'react'
import { useMedia } from 'react-use'
import { generateUUID } from 'three/src/math/MathUtils.js'

import { Ingredient, IngredientList } from '../../types/ingredients'
import Icon, { IconId } from '../Icon/Icon'
import BurgerPreview from './BurgerPreview'
import { IngredientButton } from './IngredientButton'
import { Lights } from './Lights'
import { MenuButton } from './MenuButton'

const INGREDIENT_HEIGHTS = {
  bottomBun: 0.2,
  cheese: 0.1,
  salad: 0.14,
  steak: 0.2,
  tomato: 0.12,
  topBun: 0.24,
}

const THROW_HEIGHT = 0.4
const INGREDIENT_CONTROLS: Ingredient[] = ['steak', 'cheese', 'tomato', 'salad']
const MAX_ALLOWED_HEIGHT = 3.1

const defaultIngredients: IngredientList = [
  {
    name: 'cheese',
    id: generateUUID()
  },
  {
    name: 'steak',
    id: generateUUID()
  },
  {
    name: 'salad',
    id: generateUUID()
  },
  {
    name: 'tomato',
    id: generateUUID()
  },
  {
    name: 'topBun',
    id: generateUUID()
  }

]

export const BurgerBuilder = () => {
  const [isStarted, setIsStarted] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [ingredients, setIngredients] =
    useState<IngredientList>(defaultIngredients)

  const calculateHeights = (ingredients: IngredientList) => {
    let _sum = THROW_HEIGHT + INGREDIENT_HEIGHTS['bottomBun']
    return ingredients.map(
      ingredient => (_sum += INGREDIENT_HEIGHTS[ingredient.name])
    )
  }
  const ingredientHeights = calculateHeights(ingredients)

  const addIngredient = (type: Ingredient) => {
    if (isFinished || !isStarted) return
    if (ingredientHeights.at(-1)! > MAX_ALLOWED_HEIGHT) return
    const id = generateUUID()
    setIngredients(ingredients => [...ingredients, { id, name: type }])
  }
  const addIngredientFnBuilder = (type: Ingredient) => () => addIngredient(type)

  const removeIngredient = (id: string) => {
    setIngredients(ingredients => ingredients.filter(ingredient => ingredient.id !== id))
  }
  const removeTopIngredient = () => setIngredients(
    ingredients => {
      const aux = [...ingredients]
      aux.pop()
      return aux
    }
  )

  const doNothing: MouseEventHandler<HTMLDivElement> = (e) => {
    // When double clicking on canvas, for some reason it selects the closest text below
    e.preventDefault()
    return false
  }

  const start = () => {
    setIngredients([])
    setIsStarted(true)
  }

  const finish = () => {
    if (isFinished || !isStarted) return
    const id = generateUUID()
    setIngredients(ingredients => [...ingredients, { id, name: 'topBun' }])
    setIsFinished(true)
  }

  const isSmall = useMedia('(min-width: 640px)')
  const isMedium = useMedia('(min-width: 768px)')
  const isLarge = useMedia('(min-width: 1024px)')

  const getZoomValue = () => {
    if (isLarge) return 225
    if (isMedium) return 200
    if (isSmall) return 182
    return 140
  }
  const zoom = getZoomValue()

  return (
    <div className='flex flex-col gap-8 aspect-[9/15] md:w-1/2 md:mx-auto relative'>
      <div className='flex flex-col gap-1 absolute z-10 self-center top-1/2 -translate-y-1/2'>
        {!isStarted &&
          <>
            <MenuButton onClick={start}>Start</MenuButton>
            <MenuButton>Order this</MenuButton>
          </>
        }
        {isFinished &&
          <>
            <MenuButton>Order</MenuButton>
            <MenuButton
              onClick={() => {
                setIsFinished(false)
                removeTopIngredient()
              }}
            >
              Edit
            </MenuButton>
            <MenuButton
              onClick={() => {
                setIsFinished(false)
                setIngredients([])
              }}
            >
              Restart
            </MenuButton>
          </>
        }
      </div>
      <Suspense fallback={null}>
        <Canvas
          onMouseDown={doNothing}
          orthographic
          camera={{ zoom, position: [1, 1, 2], }}
          style={{ pointerEvents: isStarted ? 'auto' : 'none' }}
        >
          <Lights />
          <Suspense fallback={null}>
            <Physics>
              <BurgerPreview ingredients={ingredients} ingredientHeights={ingredientHeights} onRemoveIngredient={removeIngredient} />
            </Physics>
          </Suspense>
        </Canvas>
      </Suspense>
      <div className='flex flex-row h-11 gap-4'>
        {INGREDIENT_CONTROLS.map((ingredient) => (
          <IngredientButton
            key={ingredient}
            onClick={addIngredientFnBuilder(ingredient)}
          >
            <Icon id={ingredient as IconId} />
          </IngredientButton>
        ))}
        <IngredientButton onClick={finish}>
          <Icon id='burger' />
        </IngredientButton>
      </div>
    </div>
  )
}

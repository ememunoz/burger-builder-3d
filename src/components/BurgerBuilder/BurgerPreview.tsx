import { ThreeEvent } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import { ElementType, FC } from 'react'
import { Euler } from 'three'

import { Ingredient, IngredientList } from '../../types/ingredients'
import { Bounds } from './bounds'
import { BottomBun, Cheese, Salad, Steak, Tomato, TopBun } from './hamburger'

const INGREDIENT_HEIGHTS = {
  bottomBun: 0.2,
  cheese: 0.06,
  salad: 0.14,
  steak: 0.2,
  tomato: 0.06,
  topBun: 0.24,
}

const THROW_HEIGHT = 0.4

const getIngredientComponent = (ingredient: Ingredient): FC | undefined => {
  switch (ingredient) {
    case 'bottomBun':
      return BottomBun
    case 'cheese':
      return Cheese
    case 'salad':
      return Salad
    case 'steak':
      return Steak
    case 'tomato':
      return Tomato
    case 'topBun':
      return TopBun
    default:
      break
  }
}

const calculateHeights = (ingredients: IngredientList) => {
  let _sum = THROW_HEIGHT + INGREDIENT_HEIGHTS['bottomBun']
  return ingredients.map(
    ingredient => (_sum += INGREDIENT_HEIGHTS[ingredient.name])
  )
}

type Props = { ingredients: IngredientList, onClick: (id: string) => void }
const BurgerPreview = ({ ingredients, onClick }: Props) => {
  // TODO similar array construction for random angles to look more organic
  const ingredientHeights = calculateHeights(ingredients)
  console.log('ingredientHeights', ingredientHeights)
  return (
    <group rotation={new Euler(0, -Math.PI / 2 + 0.3, 0)} position={[0, -1.4, 2.5]}>
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline edgeStrength={100} />
        </EffectComposer>
        {ingredients.map((ingredient, index) => {
          const Component = getIngredientComponent(
            ingredient.name
          ) as ElementType
          const positionY = ingredientHeights[index]
          return (
            <Component
              positionY={positionY}
              key={ingredient.id}
              onClick={(e: ThreeEvent<MouseEvent>) => {
                e.stopPropagation()
                onClick(ingredient.id)
              }}
            />
          )
        })}
        <BottomBun />
        <Bounds />
      </Selection>
    </group>
  )
}

export default BurgerPreview

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ElementType, FC } from 'react'
import { Euler } from 'three'

import { Bounds } from './bounds'
import { BottomBun, Cheese, Salad, Steak, Tomato, TopBun } from './hamburger'

type Ingredient =
  | 'bottomBun'
  | 'cheese'
  | 'salad'
  | 'steak'
  | 'tomato'
  | 'topBun'

const INGREDIENT_HEIGHTS = new Map<Ingredient, number>()
INGREDIENT_HEIGHTS.set('bottomBun', 0.2)
INGREDIENT_HEIGHTS.set('cheese', 0.06)
INGREDIENT_HEIGHTS.set('salad', 0.14)
INGREDIENT_HEIGHTS.set('steak', 0.2)
INGREDIENT_HEIGHTS.set('tomato', 0.06)
INGREDIENT_HEIGHTS.set('topBun', 0.24)

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

const calculateHeights = (ingredients: Ingredient[]) => {
  let _sum = THROW_HEIGHT + INGREDIENT_HEIGHTS.get('bottomBun')!
  return ingredients.map(
    ingredient => (_sum += INGREDIENT_HEIGHTS.get(ingredient)! / 2)
  )
}

type Props = { ingredients: Ingredient[] }
const BurgerPreview = ({ ingredients }: Props) => {
  // TODO Fix heights
  // TODO similar array construction for random angles to look more organic
  const ingredientHeights = calculateHeights(ingredients)
  console.log('ingredientHeights', ingredientHeights)
  return (
    <group rotation={new Euler(0, -Math.PI / 2 + 0.3, 0)}>
      {ingredients.map((ingredient, index) => {
        const Component = getIngredientComponent(ingredient) as ElementType
        const positionY = ingredientHeights[index]
        return <Component positionY={positionY} key={index} />
      })}
      <BottomBun />
      <Bounds />
    </group>
  )
}

export default BurgerPreview

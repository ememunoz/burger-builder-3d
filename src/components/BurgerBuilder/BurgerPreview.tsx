import { ThreeEvent } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import { ElementType, FC } from 'react'
import { Euler } from 'three'

import { Ingredient, IngredientList } from '../../types/ingredients'
import { Bounds } from './bounds'
import { BottomBun, Cheese, Salad, Steak, Tomato, TopBun } from './IngredientMeshes'

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

type Props = {
  ingredients: IngredientList,
  ingredientHeights: number[],
  onRemoveIngredient: (id: string) => void
}

const BurgerPreview = ({ ingredients, onRemoveIngredient, ingredientHeights }: Props) => {
  // TODO similar array construction for random angles to look more organic
  return (
    <group rotation={new Euler(0, -Math.PI / 2, 0)} position={[0, -1.35, 0]}>
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
              onDoubleClick={(e: ThreeEvent<MouseEvent>) => {
                e.stopPropagation()
                onRemoveIngredient(ingredient.id)
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

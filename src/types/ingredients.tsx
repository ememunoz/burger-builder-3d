export type Ingredient =
  | 'bottomBun'
  | 'cheese'
  | 'salad'
  | 'steak'
  | 'tomato'
  | 'topBun'

export type IngredientList = {
  id: string
  name: Ingredient
}[]

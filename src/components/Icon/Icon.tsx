import { SVGAttributes } from "react"

export type IconId =
  | 'burger'
  | 'cheese'
  | 'circle-xmark'
  | 'salad'
  | 'steak'
  | 'tomato'

interface Props extends SVGAttributes<SVGElement> {
  id: IconId
  className?: string
}

const Icon = ({ id, ...rest }: Props) => {
  return (
    <svg {...rest} className='h-full fill-current'>
      <use href={`/assets/img/icons.svg#${id}`} />
    </svg>
  )
}

export default Icon
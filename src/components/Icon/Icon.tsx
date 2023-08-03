export type IconId =
  | 'cheese'
  | 'salad'
  | 'steak'
  | 'tomato'

interface Props extends React.SVGAttributes<SVGElement> {
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
import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const IngredientButton = ({ children, className = '', ...props }: Props) => (
  <button
    type="button"
    className={`px-4 py-2 rounded bg-mint text-mintDark-700 hover:bg-mintHover active:bg-mintActive ${className}`}
    {...props}
  >
    {children}
  </button>
)
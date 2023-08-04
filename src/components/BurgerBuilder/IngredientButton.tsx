import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const IngredientButton = ({ children, className = '', ...props }: Props) => (
  <button
    type="button"
    className={twMerge('p-1 sm:px-4 sm:py-2 rounded font-display bg-mint text-mintDark-700 hover:bg-mintHover active:bg-mintActive', className)}
    {...props}
  >
    {children}
  </button>
)
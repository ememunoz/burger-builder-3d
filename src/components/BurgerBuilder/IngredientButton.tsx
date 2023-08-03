import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const IngredientButton = ({ children, ...props }: Props) => (
  <button
    type="button"
    className="px-4 py-2 rounded bg-mint text-mintDark hover:bg-mintHover active:bg-mintActive"
    {...props}
  >
    {children}
  </button>
)
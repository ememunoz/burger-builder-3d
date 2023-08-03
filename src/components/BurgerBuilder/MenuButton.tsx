import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const MenuButton = ({ children, className = '', ...props }: Props) => (
  <button
    type="button"
    className={`text-2xl font-display px-4 py-2 rounded bg-mintDark-500 text-white hover:bg-mintDark-600 active:bg-mintDark-700 ${className}`}
    {...props}
  >
    {children}
  </button>
)
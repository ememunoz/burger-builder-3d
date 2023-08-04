import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const MenuButton = ({ children, className = '', ...props }: Props) => (
  <button
    type="button"
    className={twMerge('text-2xl font-display px-4 py-2 rounded bg-mintDark-700 text-white hover:bg-mintDark-600 active:bg-mintDark-500', className)}
    {...props}
  >
    {children}
  </button>
)
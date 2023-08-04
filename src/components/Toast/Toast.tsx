import * as RadixToast from '@radix-ui/react-toast'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import Icon from '../Icon/Icon'

interface Props extends RadixToast.ToastProps {
  titleSlot?: ReactNode
  bodySlot?: ReactNode
}

export const Toast = ({ titleSlot, bodySlot, className, ...props }: Props) => {
  return (
    <RadixToast.Root className={twMerge(`
          rounded p-4 max-w-md ml-auto bg-mintDark-600 font-body text-white grid grid-cols-[1fr,min-content]
          data-[state=open]:animate-toastOpen data-[state=closed]:animate-toastClosed data-[swipe=end]:animate-toastEnd
          data-[state=swipe]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-[translate]
        `, className)}
      {...props}
    >
      <RadixToast.Title className='text-lg font-bold'>
        {titleSlot}
      </RadixToast.Title>
      <RadixToast.Description className=''>
        {bodySlot}
      </RadixToast.Description>
      <RadixToast.Action altText='close' className='col-start-2 row-start-1 row-span-2 self-center' asChild>
        <button type="button" className='h-4 aspect-square'><Icon id='circle-xmark' /></button>
      </RadixToast.Action>
    </RadixToast.Root>
  )
}

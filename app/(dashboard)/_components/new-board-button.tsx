'use client'

import { toast } from 'sonner'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from '~/lib/utils'
import { api } from '~/convex/_generated/api'
import { useApiMutation } from '~/hooks/use-api-mutation'

type NewBoardButtonProps = {
  orgId: string
  disabled?: boolean
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps): JSX.Element => {
  const router = useRouter()
  const { mutate, pending } = useApiMutation(api.board.create)

  const onClick = (): void => {
    const promise = mutate({
      orgId,
      title: 'Untitled'
    }).then((id) => {
      router.push(`/board/${id}`)
    })

    toast.promise(promise, {
      loading: 'Creating a new board...',
      success: 'New board created!',
      error: 'Failed to create a board.'
    })
  }

  return (
    <button
      disabled={disabled || pending}
      onClick={onClick}
      className={cn(
        'col-span-1 flex aspect-[100/127] flex-col items-center justify-center rounded-lg bg-blue-600 py-6 hover:bg-blue-800',
        disabled || pending ? 'cursor-not-allowed opacity-75 hover:bg-blue-600' : ''
      )}
    >
      <div />
      <PlusIcon className="h-12 w-12 stroke-1 text-white" />
      <p className="text-xs font-light text-white">New board</p>
    </button>
  )
}

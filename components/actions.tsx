'use client'

import { toast } from 'sonner'
import { ReactNode } from 'react'
import { Link2, Pencil, Trash2 } from 'lucide-react'
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '~/components/ui/dropdown-menu'
import { api } from '~/convex/_generated/api'
import { Button } from '~/components/ui/button'
import { ConfirmModal } from '~/components/confirm-modal'
import { useApiMutation } from '~/hooks/use-api-mutation'
import { useRenameModal } from '~/store/use-rename-store'

type ActionsProps = {
  id: string
  title: string
  children: ReactNode
  side?: DropdownMenuContentProps['side']
  sideOffset?: DropdownMenuContentProps['sideOffset']
}

export const Actions = (props: ActionsProps): JSX.Element => {
  const { children, side, sideOffset, id, title } = props

  const { onOpen } = useRenameModal()
  const { mutate, pending } = useApiMutation(api.board.remove)

  const onCopyLink = (): Promise<string | number> =>
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success('Link copied.'))
      .catch(() => toast.error('Failed to copy link'))

  const onDelete = (): void => {
    const promise = mutate({ id })

    toast.promise(promise, {
      loading: 'Deleting a board...',
      success: 'Board Deleted',
      error: 'Failed to delete board.'
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        className="w-60"
        sideOffset={sideOffset}
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem className="cursor-pointer p-3" onClick={onCopyLink}>
          <Link2 className="mr-2 h-4 w-4" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer p-3" onClick={() => onOpen(id, title)}>
          <Pencil className="mr-2 h-4 w-4" />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete board?"
          description="This will delete the board and all of its contents."
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
            className="w-full cursor-pointer justify-start p-3 text-sm font-normal"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

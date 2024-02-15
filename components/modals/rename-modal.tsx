'use client'

import { toast } from 'sonner'
import { FormEventHandler, useEffect, useState } from 'react'

import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogDescription
} from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { api } from '~/convex/_generated/api'
import { Button } from '~/components/ui/button'
import { useRenameModal } from '~/store/use-rename-store'
import { useApiMutation } from '~/hooks/use-api-mutation'

type RenameModalProps = {}

export const RenameModal = (props: RenameModalProps): JSX.Element => {
  const { mutate, pending } = useApiMutation(api.board.update)

  const { isOpen, onClose, initiaValues } = useRenameModal()

  const [title, setTitle] = useState<string>(initiaValues.title)

  useEffect(() => {
    setTitle(initiaValues.title)
  }, [initiaValues.title])

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const promise = mutate({
      id: initiaValues.id,
      title
    }).then(() => {
      onClose()
    })

    toast.promise(promise, {
      loading: 'Renaming a board...',
      success: 'Board Renamed',
      error: 'Failed to rename board.'
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

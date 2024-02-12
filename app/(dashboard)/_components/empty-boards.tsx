'use client'

import Image from 'next/image'
import { toast } from 'sonner'
import { useOrganization } from '@clerk/nextjs'

import { api } from '~/convex/_generated/api'
import { Button } from '~/components/ui/button'
import { useApiMutation } from '~/hooks/use-api-mutation'

export const EmptyBoards = (): JSX.Element => {
  const { organization } = useOrganization()
  const { mutate, pending } = useApiMutation(api.board.create)

  const onClick = (): void => {
    if (!organization) return

    const promise = mutate({
      orgId: organization?.id,
      title: 'Untitled'
    }).then((id) => {
      // TODO: Redirect to board/{id}
    })

    toast.promise(promise, {
      loading: 'Creating a new board...',
      success: 'New board created!',
      error: 'Failed to create a board.'
    })
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty" />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board!</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} size="lg" onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  )
}

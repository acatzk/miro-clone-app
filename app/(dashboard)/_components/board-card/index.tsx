'use client'

import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'sonner'
import { useAuth } from '@clerk/nextjs'
import { MoreHorizontal } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

import { api } from '~/convex/_generated/api'
import { Actions } from '~/components/actions'
import { Skeleton } from '~/components/ui/skeleton'
import { useApiMutation } from '~/hooks/use-api-mutation'

import { Footer } from './footer'
import { Overlay } from './overlay'

type BoardCardProps = {
  id: string
  title: string
  imageUrl: string
  authorId: string
  authorName: string
  createdAt: number
  orgId: string
  isFavorite: boolean
}

export const BoardCard = (props: BoardCardProps): JSX.Element => {
  const { id, title, imageUrl, authorId, authorName, createdAt, orgId, isFavorite } = props

  const { userId } = useAuth()
  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(api.board.favorite)
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(api.board.unfavorite)

  const authorLabel = userId === authorId ? 'You' : authorName
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true
  })

  const toggleFavorite = (): void => {
    if (isFavorite) {
      onUnfavorite({ id }).catch(() => toast.error('Failed to unfavorite'))
    } else {
      onFavorite({ id, orgId }).catch(() => toast.error('Failed to favorite'))
    }
  }

  return (
    <Link href={`/board/${id}`}>
      <div className="group flex aspect-[100/127] flex-col justify-between overflow-hidden rounded-lg border">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute right-1 top-1 px-3 py-2 opacity-0 outline-none transition-opacity group-hover:opacity-100">
              <MoreHorizontal className="text-white opacity-75 transition-opacity hover:opacity-100" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnfavorite}
        />
      </div>
    </Link>
  )
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="group aspect-[100/127] justify-between overflow-hidden rounded-lg">
      <Skeleton className="h-full w-full" />
    </div>
  )
}

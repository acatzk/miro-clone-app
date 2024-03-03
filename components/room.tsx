'use client'

import React, { ReactNode } from 'react'
import { ClientSideSuspense } from '@liveblocks/react'

import { RoomProvider } from '~/liveblocks.config'

type RoomProps = {
  children: ReactNode
  roomId: string
  fallback: NonNullable<ReactNode> | null
}

export const Room = ({ children, roomId, fallback }: RoomProps): JSX.Element => {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={fallback}>{() => children}</ClientSideSuspense>
    </RoomProvider>
  )
}

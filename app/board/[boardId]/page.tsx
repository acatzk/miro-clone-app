import React from 'react'

import { Room } from '~/components/room'

import { Canvas } from './_components/canvas'
import { Loading } from './_components/loading'

type BoardIdPageProps = {
  params: {
    boardId: string
  }
}

export default function BoardIdPage({ params }: BoardIdPageProps): JSX.Element {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  )
}

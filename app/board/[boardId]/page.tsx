import React from 'react'

import { Canvas } from './_components/canvas'

type BoardIdPageProps = {
  params: {
    boardId: string
  }
}

export default function BoardIdPage({ params }: BoardIdPageProps): JSX.Element {
  return <Canvas boardId={params.boardId} />
}

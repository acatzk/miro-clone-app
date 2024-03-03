'use client'

import React from 'react'

import { Info } from './info'
import { Toolbar } from './toolbar'
import { Participants } from './participants'

type CanvasProps = {
  boardId: string
}

export const Canvas = ({ boardId }: CanvasProps): JSX.Element => {
  return (
    <main className="relative h-full w-full touch-none bg-neutral-100">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  )
}

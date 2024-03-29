import React from 'react'
import { Loader } from 'lucide-react'

import { Info } from './info'
import { Toolbar } from './toolbar'
import { Participants } from './participants'

export const Loading = (): JSX.Element => {
  return (
    <main className="relative flex h-full w-full touch-none items-center justify-center bg-neutral-100">
      <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  )
}

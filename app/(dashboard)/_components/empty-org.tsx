import React from 'react'
import Image from 'next/image'
import { CreateOrganization } from '@clerk/nextjs'

import { Button } from '~/components/ui/button'
import { Dialog, DialogTrigger, DialogContent } from '~/components/ui/dialog'

export const EmptyOrg = (): JSX.Element => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Empty" height={200} width={200} />
      <h2 className="mt-6 text-2xl font-semibold">Welcome to Miro Board Clone</h2>
      <p className="mt-2 text-sm text-muted-foreground">Create an organization to get started</p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create organization</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
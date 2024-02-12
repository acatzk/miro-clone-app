'use client'

import React from 'react'
import { Plus } from 'lucide-react'
import { OrganizationProfile } from '@clerk/nextjs'

import { Button } from '~/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '~/components/ui/dialog'

export const InviteButton = (): JSX.Element => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[880px] border-none bg-transparent p-0">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  )
}

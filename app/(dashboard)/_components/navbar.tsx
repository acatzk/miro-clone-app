'use client'

import React from 'react'
import { UserButton } from '@clerk/nextjs'

export const Navbar = (): JSX.Element => {
  return (
    <div className="flex items-center gap-x-4 bg-green-500 p-5">
      <div className="hidden bg-yellow-500 lg:flex lg:flex-1">Search</div>
      <UserButton />
    </div>
  )
}

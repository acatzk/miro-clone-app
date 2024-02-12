'use client'

import React from 'react'
import { useOrganization } from '@clerk/nextjs'

import { EmptyOrg } from './_components/empty-org'
import { BoardList } from './_components/board-list'

type DashboardPageProps = {
  searchParams: {
    search?: string
    favorites?: string
  }
}

export default function DashboardPage({ searchParams }: DashboardPageProps): JSX.Element {
  const { organization } = useOrganization()

  return (
    <div className="h-[calc(100%-80px)] flex-1 p-6">
      {!organization ? <EmptyOrg /> : <BoardList orgId={organization.id} query={searchParams} />}
    </div>
  )
}

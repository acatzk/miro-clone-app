import React from 'react'

import { EmptySearch } from './empty-search'
import { EmptyBoards } from './empty-boards'
import { EmptyFavorites } from './empty-favorites'

type BoardListProps = {
  orgId: string
  query: {
    search?: string
    favorites?: string
  }
}

export const BoardList = ({ orgId, query }: BoardListProps): JSX.Element => {
  const data = [] // TODO: Change to API Call

  if (!data?.length && query.search) {
    return <EmptySearch />
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />
  }

  if (!data?.length) {
    return <EmptyBoards />
  }

  return <div>{JSON.stringify(query)}</div>
}

import React from 'react'

export const Participants = (): JSX.Element => {
  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md">
      List of Users
    </div>
  )
}

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute right-2 top-2 flex h-12 w-[100px] items-center rounded-md bg-white p-3 shadow-md" />
  )
}

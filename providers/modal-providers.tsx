'use client'

import { useEffect, useState } from 'react'

import { RenameModal } from '~/components/modals/rename-modal'

export const ModalProvider = (): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <RenameModal />
    </>
  )
}

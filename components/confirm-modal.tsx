'use client'

import { ReactNode } from 'react'

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogDescription
} from '~/components/ui/alert-dialog'

type ConfirmModalProps = {
  children: ReactNode
  onConfirm: () => void
  disabled?: boolean
  header?: string
  description?: string
}

export const ConfirmModal = (props: ConfirmModalProps): JSX.Element => {
  const { children, onConfirm, disabled, header, description } = props

  const handleConfirm = (): void => {
    onConfirm()
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={handleConfirm}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

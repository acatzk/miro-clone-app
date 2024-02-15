import { create } from 'zustand'

const defaultValues = {
  id: '',
  title: ''
}

type IRenameModal = {
  isOpen: boolean
  initiaValues: typeof defaultValues
  onOpen: (id: string, title: string) => void
  onClose: () => void
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  onOpen: (id, title) =>
    set({
      isOpen: true,
      initiaValues: {
        id,
        title
      }
    }),
  onClose: () =>
    set({
      isOpen: false,
      initiaValues: defaultValues
    }),
  initiaValues: defaultValues
}))

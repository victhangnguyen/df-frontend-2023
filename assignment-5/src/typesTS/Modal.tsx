export interface ModalProps {
  children: React.ReactNode
  title: string
  isOpen: boolean
  onClose: (e: KeyboardEvent | React.MouseEvent<HTMLButtonElement>) => void
}

export interface ConfirmationModalProps {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

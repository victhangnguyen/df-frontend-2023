export interface ModalProps {
  children: React.ReactNode
  title: string
  isOpen: boolean
  onClose: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLImageElement>,
  ) => void
}

export interface ConfirmationModalProps {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

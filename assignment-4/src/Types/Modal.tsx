export interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLImageElement>,
  ) => void
}

export interface ConfirmationModalProps {
  children: React.ReactNode
  isOpen: boolean
  handleClose: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLImageElement>,
  ) => void
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

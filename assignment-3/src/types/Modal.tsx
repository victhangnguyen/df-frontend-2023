export interface ConfirmationModalProps {
  submitLabelContent?: string;
  cancelLabelContent?: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLImageElement>,
  ) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonTypeProp = 'button' | 'submit' | 'reset' | undefined
type ButtonColorProp =
  | 'primary'
  | 'danger'
  | 'outline-primary'
  | 'outline-danger'

export interface ButtonProps {
  className?: string
  children?: React.ReactNode
  variant?: ButtonColorProp
  icon?: React.JSX.Element
  label?: string
  type?: ButtonTypeProp
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface ToggleButtonProps {
  label?: string
  toggled?: boolean
  // onClick: React.Dispatch<React.SetStateAction<boolean>>
  onClick: (toggle: boolean) => void
}

export interface ButtonProps {
  children?: React.ReactNode
  icon?: React.JSX.Element
  label?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface ToggleButtonProps {
  label: string
  toggled: boolean
  onClick: React.Dispatch<React.SetStateAction<boolean>>
}

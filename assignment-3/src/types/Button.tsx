export interface ToggleButtonProps {
  label: string;
  toggled: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

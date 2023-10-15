'use client'

import { ButtonProps } from '../../typesTS'

function Button({
  className,
  children,
  variant = 'primary',
  icon,
  label,
  type = 'button',
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const generateButtonStyle = (variant: string) => {
    let buttonStyle: string = ''
    switch (variant) {
      case 'primary':
        buttonStyle = `text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
        break

      case 'outline-primary':
        buttonStyle = `text-blue-800 dark:text-white rounded-lg border-2 border-blue-800 focus:ring-blue-300 dark:focus:ring-blue-800`
        break

      case 'danger':
        buttonStyle = `text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800`
        break

      case 'outline-danger':
        buttonStyle = `text-rose-800 dark:text-white rounded-lg border-2 border-rose-800 focus:ring-rose-300 dark:focus:ring-rose-800`
        break

      default:
        buttonStyle = `text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
        break
    }
    return buttonStyle
  }
  const buttonStyle = generateButtonStyle(variant)
  return (
    <button
      className={`${buttonStyle} m-2 px-3 py-2 text-xs font-medium text-center inline-flex items-center focus:ring-4 focus:outline-none ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children || (
        <>
          <span className="mr-1">{icon}</span>
          {label}
        </>
      )}
    </button>
  )
}

export default Button

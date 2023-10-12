import { ButtonProps } from '../../types'

function Button({ children, icon, label, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="m-2 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={onClick}
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

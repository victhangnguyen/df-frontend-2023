import Modal from './Modal'
//! types
import { ConfirmationModalProps } from '../../types'
import { useAppContext } from '../../Context'

function ConfirmationModal({ onSubmit }: ConfirmationModalProps) {
  const {
    state,
    contextActions: { modal },
  } = useAppContext()

  let title: string

  switch (state.modalType) {
    case 'DELETE':
      title = 'Delete Book'
      break

    default:
      title = ''
      break
  }

  return (
    <Modal
      title={title}
      isOpen={state.modalIsOpen}
      onClose={() => modal.confirmClose()}
    >
      <p className="text-white p-5">{state.modalMessage}</p>
      {/* <!-- Modal footer --> */}
      <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          type="submit"
          className="mx-4 uppercase text-whitebg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onSubmit}
        >
          {state.modalType}
        </button>
        <button
          type="button"
          className="mx-4 uppercase text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          onClick={() => modal.confirmClose()}
        >
          Cancle
        </button>
      </div>
    </Modal>
  )
}

export default ConfirmationModal

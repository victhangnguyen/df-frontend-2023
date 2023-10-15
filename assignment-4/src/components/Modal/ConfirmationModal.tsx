//! imp Comps
import { Button } from '../Buttons'
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
      <p className="text-black dark:text-white p-5">{state.modalMessage}</p>
      {/* <!-- Modal footer --> */}
      <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <Button type="submit" variant="danger" onClick={onSubmit}>
          {state.modalType}
        </Button>
        <Button
          type="button"
          variant="outline-danger"
          onClick={() => modal.confirmClose()}
        >
          Cancle
        </Button>
      </div>
    </Modal>
  )
}

export default ConfirmationModal

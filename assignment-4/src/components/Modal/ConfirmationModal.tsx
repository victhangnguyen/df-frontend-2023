import Modal from './Modal'
//! types

function ConfirmationModal({
  // submitLabelContent = 'OK',
  // cancelLabelContent = 'Cancel',
  // onSubmit,
  isOpen,
  onClose,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1>hello</h1>
    </Modal>
  )
}

export default ConfirmationModal

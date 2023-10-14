import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactPortal from '../ReactPortal'
import { Topic } from '../../fakeDatabase'

interface InputAddTopicModalProps {
  submitLabelContent?: string
  cancelLabelContent?: string
  isOpen: boolean
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleAddTopicSubmit: (
    e: React.MouseEvent<HTMLButtonElement>,
    topicData: Topic,
    resetForm: () => void,
  ) => void
}

function InputAddTopicModal({
  submitLabelContent = 'Add',
  cancelLabelContent = 'Cancel',
  isOpen,
  handleClose,
  handleAddTopicSubmit,
}: InputAddTopicModalProps) {
  const [values, setValues] = useState({
    name: '',
  })

  const nodeRef = useRef(null)
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose(e) : null)
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  function resetForm() {
    setValues({ name: '' })
  }

  function handleSubmit(e) {
    const topicData = { name: values.name }
    handleAddTopicSubmit(e, topicData, resetForm)
  }

  return (
    <ReactPortal wrapperId="modal-root">
      <CSSTransition
        in={isOpen}
        timeout={{ appear: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <form className="modal-wrapped" onSubmit={handleSubmit}>
            <div className="modal-header">Add Book</div>
            <div className="modal-body">
              <div className="modal-content">
                <div className="form-control-group">
                  <label className="label-form-control" htmlFor="ipt-name">
                    name
                    <input
                      id="ipt-name"
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Enter book's name..."
                      value={values.name}
                      onChange={handleChange}
                    />
                  </label>
                  <span className="focus-form-control" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn" type="submit">
                {submitLabelContent}
              </button>
              <button onClick={handleClose} className="btn btn-cancel">
                {cancelLabelContent}
              </button>
            </div>
          </form>
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}

export default InputAddTopicModal

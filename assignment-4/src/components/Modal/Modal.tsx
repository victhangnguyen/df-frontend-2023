import { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactPortal from '../ReactPortal'
//! types
import { ModalProps } from '../../typesTS'

function Modal({ title, isOpen, onClose, children }: ModalProps) {
  const nodeRef = useRef(null)

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? onClose(e) : null)
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [onClose])

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      unmountOnExit
      nodeRef={nodeRef}
      classNames="modal"
    >
      <ReactPortal wrapperId="modal-root">
        <div className="fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full z-50 justify-center items-center flex backdrop-blur-sm backdrop-opacity-95 bg-black/30">
          <div className="modal w-full max-w-2xl max-h-full" ref={nodeRef}>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <button
                  type="button"
                  className="mx-4 uppercase text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-3 py-2 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={onClose}
                >
                  X
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </ReactPortal>
    </CSSTransition>
  )
}

export default Modal

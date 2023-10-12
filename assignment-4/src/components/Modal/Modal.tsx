import { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactPortal from '../ReactPortal'
//! types
import { ModalProps } from '../../types'

function Modal({ isOpen, onClose, children }: ModalProps) {
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
            {children}
          </div>
        </div>
      </ReactPortal>
    </CSSTransition>
  )
}

export default Modal

import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

interface ReactPortalProps {
  children: React.ReactNode
  wrapperId?: string
  customClassName?: string
}

//! create element inside
function createWrappedBody(wrapperId?: string, customClassName?: string) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId!)

  if (customClassName) {
    wrapperElement.setAttribute('className', customClassName!)
  }

  document.body.appendChild(wrapperElement)
  return wrapperElement
}

//! children: renderedComponent, wrapperId: id of portal-root
function ReactPortal({
  children,
  wrapperId = 'portal-wrapped-root',
  customClassName = '',
}: ReactPortalProps) {
  //! state used to update modal and re-render modal
  const [wrapperElement, setWrapperElement] = useState<Element | null>(null)

  useLayoutEffect(() => {
    let wrapperElement: HTMLElement | null = document.getElementById(wrapperId)
    let systemCreated = false

    //! check existing Element have wrapperId
    if (!wrapperElement) {
      //! create wrapperId element that inside body
      systemCreated = true
      wrapperElement = createWrappedBody(wrapperId, customClassName)
    }
    setWrapperElement(wrapperElement)

    return () => {
      if (systemCreated && wrapperElement!.parentNode) {
        wrapperElement!.parentNode.removeChild(wrapperElement!)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperId])

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}

export default ReactPortal

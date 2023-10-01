import { createPortal } from 'react-dom'
import { clsx } from 'clsx'
import './Modal.scss'

const modalRoot = document.querySelector('#modal-root')

const Modal = ({ children, onClose, isOpen }) => {
  return createPortal(
    <div onClick={() => onClose()} className={clsx('backdrop', isOpen)}>
      {children}
    </div>,
    modalRoot
  )
}

export default Modal

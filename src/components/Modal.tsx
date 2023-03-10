import { MouseEventHandler, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom'

interface ModalType{
  onClose: MouseEventHandler,
  children: ReactNode,
  actionBar: ReactNode
}

function Modal({onClose, children, actionBar}: ModalType) {
  useEffect(()=> {
    document.body.classList.add('overflow-hidden')

    return () =>{
      document.body.classList.remove('overflow-hidden')
    }
  }, [])


  return ReactDOM.createPortal(
  <div>
    <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
    <div className="fixed lg:inset-x-60 inset-x-10 top-40 p-10 bg-white">
      <div className='flex flex-col justify-between h-full'>
        {children}
        <div className='flex justify-end'>
        {actionBar}
        </div>
      </div>
    </div>
    </div>,
  //@ts-ignore
  document.querySelector('.modal-container'))
}

export default Modal;

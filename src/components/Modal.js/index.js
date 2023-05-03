import { useState, useEffect } from "react"

function Modal({displayModal, toggleModal}) {
  const [header, setHeader] = useState('Confirming transaction...')
  const [description, setDescription] = useState('Please wait')

  return (
    <div
      className='modal'
      style={{display: displayModal ? 'block' : 'none'}}
      onClick={() => toggleModal(!displayModal)}
    >
      <div className='modal-content' style={{textAlign: 'center'}}>
        <span className="modal-header">{header}</span>
        <span className="modal-description">{description}</span>
      </div>
    </div>
  )
}

export default Modal
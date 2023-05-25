import React, { useState } from 'react'

export const Modal = ({name}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleContactClick = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
  return (
    <>
    <div onClick={handleContactClick}>{name}</div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Details</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Name: {name}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
  )
}

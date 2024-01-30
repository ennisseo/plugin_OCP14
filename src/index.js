import React, { useEffect } from 'react';
import './index.css';

const Modal = ({ isOpen, closeModal }) => {
    // Close the modal when clicking outside the modal content
    const handleOutsideClick = (e) => {
        if (isOpen && e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    // Close the modal on escape key press
    const handleEscapeKey = (e) => {
        if (isOpen && e.key === 'Escape') {
            closeModal();
        }
    };

    useEffect(() => {
        // Attach event listeners when the modal is open
        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);
        }

        // Remove event listeners when the modal is closed
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    });

    return isOpen ? (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>Employee created !</p>
                <button className="modal-close-button" onClick={closeModal}>X</button>
            </div>
        </div>
    ) : null;
};

export default Modal;

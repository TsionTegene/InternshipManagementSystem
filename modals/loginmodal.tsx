import React, { useEffect } from 'react';
import styles from './MyModal.module.css';
//@ts-ignore 
const MyModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    //@ts-ignore 
    const handleOutsideClick = (event) => {
      if (!isOpen) return;

      // Check if the click occurred outside of the modal
      if (!event.target.closest(`.${styles.modal}`)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default MyModal;

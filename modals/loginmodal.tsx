import React from 'react';
import styles from './MyModal.module.css';
import { Button } from '@/components/ui/button';
import { IoCloseCircleOutline } from "react-icons/io5";

const MyModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* <Button className={styles.closeButton} onClick={handleClose}>
          close
        </Button> */}
        <IoCloseCircleOutline className={styles.closeButton} onClick={handleClose} />

        {children}
      </div>
    </div>
  );
};

export default MyModal;

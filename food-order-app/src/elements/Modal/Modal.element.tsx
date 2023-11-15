import { ReactNode, useEffect } from "react";
import { clsx } from "clsx";

import { useEscapeKey } from "@/hooks/useEscapeKey.hook";

import styles from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  isShown: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isShown, onClose }) => {
  useEscapeKey(onClose);

  useEffect(() => {
    document.body.style.overflow = isShown ? "hidden" : "auto";
  }, [isShown]);

  const modalStyle = clsx({
    [styles.showModal]: isShown === true,
    [styles.hideModal]: isShown === false,
  });

  return (
    <div className={modalStyle}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

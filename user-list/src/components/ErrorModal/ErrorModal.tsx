import { Card } from "@/elements/Card/Card";
import { Button } from "@/elements/Button/Button";

import styles from "./ErrorModal.module.scss";

interface ErrorModalProps {
  title: string;
  message: string;
  resetModal: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  title,
  message,
  resetModal,
}) => {
  return (
    <>
      <div className={styles.backdrop} onClick={resetModal} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <span>{message}</span>
        </div>
        <footer className={styles.actions}>
          <Button text="Okay" onClick={resetModal} />
        </footer>
      </Card>
    </>
  );
};

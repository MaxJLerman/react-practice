import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  textarea?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, textarea = false }) => {
  return (
    <p className={styles.container}>
      <label className={styles.label}>{label}</label>
      {textarea ? (
        <textarea className={styles.input} />
      ) : (
        <input className={styles.input} />
      )}
    </p>
  );
};

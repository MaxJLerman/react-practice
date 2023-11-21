interface InputProps {
  label: string;
  textarea?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, textarea = false }) => {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea /> : <input />}
    </p>
  );
};

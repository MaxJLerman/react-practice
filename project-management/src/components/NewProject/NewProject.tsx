import { Input } from "../Input/Input";

import styles from "./NewProject.module.scss";

export const NewProject: React.FC = () => {
  return (
    <div className={styles.container}>
      <menu className={styles.menu}>
        <li>
          <button className={styles.cancelButton}>Cancel</button>
        </li>
        <li>
          <button className={styles.saveButton}>Save</button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} />
        <Input label={"Description"} textarea />
        <Input label={"Due Date"} />
      </div>
    </div>
  );
};

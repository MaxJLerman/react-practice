import styles from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.sidebarTitle}>Your Projects</h2>
      <div>
        <button className={styles.addButton}>+ Add Project</button>
      </div>
      <ul></ul>
    </aside>
  );
};

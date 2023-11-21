import { NewProject } from "./components/NewProject/NewProject";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <NewProject />
    </main>
  );
};

export default App;

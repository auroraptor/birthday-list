import BdForm from "../BdForm/BdForm";
import styles from "./App.module.css";
import Header from "../Header/Header";
import BdList from "../BdList/BdList";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header />
        <BdForm />
        <BdList />
      </div>
    </div>
  );
}

export default App;

import BdForm from '../BdForm/BdForm';
import styles from './App.module.css';
import Header from '../Header/Header';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Content}>
        <Header />
        <BdForm />
      </div>
    </div>
  );
}

export default App;

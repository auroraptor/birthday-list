import styles from './App.module.css';
import Header from '../Header/Header';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Content}>
        <Header />
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import BdForm from '../BdForm/BdForm';
import styles from './App.module.css';

function App() {
  const [bdList, setBdList] = useState([
    {
      id: 1,
      date: "21.06"
    },
    {
      id: 2,
      date: "01.01"
    }
  ]);


  return (
    <div className={styles.App}>
      <div className={styles.Content}>
        <BdForm setBdList={setBdList} />

      </div>
    </div>
  );
}

export default App;

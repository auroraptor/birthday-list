import React from 'react';
import styles from './bd-button.module.css';

export default function BdButton({onclick, children}) {
  
  return (
      <button className={styles["bd-button"]} onClick={onclick}>{children}</button>
  )
}

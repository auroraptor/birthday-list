import React from 'react';
import styles from './bd-input.module.css';


export default function BdInput({ input, value }) {
  
  return (
    <input type='text' className={styles["bd-input"]} onInput={input} value={value} />
  )
}

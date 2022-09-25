import React from 'react';
import styles from './bdItem.module.css';

export default function BdItem({ id, date }) {
    
  return (
      <article className={styles["bd-item"]}>
          <span className={styles.date}>{date}</span>
          <button className={styles.remove}></button>
      </article>
  )
}

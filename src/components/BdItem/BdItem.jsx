import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { removeBd } from "../../slices/bdSlice";
import styles from "./bd-item.module.css";

export default function BdItem({ id, date }) {
  const dispatch = useDispatch();

  return (
    <article className={styles["bd-item"]}>
      <span className={styles.date}>{date}</span>
      <button
        className={styles.remove}
        onClick={() => {
          dispatch(removeBd({ id }));
        }}
      ></button>
    </article>
  );
}

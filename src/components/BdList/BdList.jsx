import React from "react";
import { useSelector } from "react-redux/es/exports";
import BdItem from "../BdItem/BdItem";
import styles from "./bd-list.module.css";

export default function BdList() {
  const bds = useSelector((state) => state.bdList.bds);
  return (
    <div className={styles["bd-list"]}>
      {bds.map((bd) => (
        <BdItem key={bd.id} {...bd} />
      ))}
    </div>
  );
}

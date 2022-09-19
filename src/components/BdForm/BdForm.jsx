import { React, useState } from "react";
import BdButton from "../UI/BdButton/BdButton";
import BdInput from "../UI/BdInput/BdInput";
import styles from "./bd-form.module.css";

export default function BdForm({ setBdList }) {
  const [bd, setBd] = useState("");

  const inputHandle = (evt) => {
    setBd(evt.target.value);
  };
  const addHandle = (evt) => {
    evt.preventDefault();
    setBdList((prevList) => [...prevList, { id: new Date(), date: bd }]);
  };

  return (
    <form className={styles.form} noValidate>
      <BdInput input={inputHandle} value={bd} />
      <BdButton onclick={addHandle}>Добавить</BdButton> 
    </form>
  );
}

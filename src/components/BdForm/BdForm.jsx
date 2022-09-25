import { React, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addBd } from "../../slices/bdSlice";
import BdButton from "../UI/BdButton/BdButton";
import BdInput from "../UI/BdInput/BdInput";
import styles from "./bd-form.module.css";

export default function BdForm() {
  const [bd, setBd] = useState("");
  const dispatch = useDispatch();
  const inputHandle = (evt) => {
    setBd(evt.target.value);
  };
  const addHandle = (evt) => {
    evt.preventDefault();
    //TODO:генерация id от сервера
    dispatch(addBd({ id: new Date().toISOString(), date: bd }));
    setBd("");
  };

  return (
    <form className={styles.form} noValidate>
      <BdInput input={inputHandle} value={bd} />
      <BdButton onclick={addHandle}>Добавить</BdButton>
    </form>
  );
}

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
  const addHandle = async (evt) => {
    evt.preventDefault();

    const dateFormat = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[0-2])$/;

    if (bd.match(dateFormat)) {
      console.log(bd);
      const data = { date: bd };
      try {
        const response = await fetch('http://localhost:8000/add_date', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log('Data sent successfully.');
          // TODO: Handle the response if needed
        } else {
          console.error('Failed to send data:', response.status, response.statusText);
          // TODO: Handle the error if needed
        }} catch (error) {
          console.error('Error sending data:', error);
          // TODO: Handle network errors if needed
        }
    //TODO:генерация id от сервера
    dispatch(addBd({ id: new Date().toISOString(), date: bd }));
    setBd("");
    //TODO:сделать визуальное отображение ошибки
    //TODO:ОПЦИПОНАЛЬНО поменять строку ввода на выбор календарного дня и месяца
  } else console.log("неправильный формат даты")}



  return (
    <form className={styles.form} noValidate>
      <BdInput input={inputHandle} value={bd} />
      <BdButton onclick={addHandle}>Добавить</BdButton>
    </form>
  );
}

import React from 'react';
import logo from '../../images/logo.svg';
//import './App.css';


function App() {
  return (
    <div className="page">
  <div className="page__content">
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="header__title">
        Birthday List
      </h1>
    </header>
    <section className="bd-add">
      <form name="bd-add__form" className="bd-add__form">
        <input type="text" name="date" className="bd-add__input" placeholder="Дата Дня  Рождения" />
        <button type="submit" className="button bd-add__submit-btn">
          Добавить
        </button>
      </form>
      <ul className="bd-list__list">
       
      </ul>
    </section>
    <footer className="footer">
      <footer className="footer__title">
        Group of strange humen being
      </footer>
    </footer>
  </div>
  <template className="bd-template">
    <li className="bd-item">
      <p className="bd-item__text">
        01.01
      </p>
      <button className="button bd-item__btn bd-item__btn_type_edit">

      </button>
      <button className="bd-item__btn button bd-item__btn_type_copy">

      </button>
      <button className="bd-item__btn button bd-item__btn_type_remove">

      </button>
    </li>
  </template>
</div>
  );
}

export default App;

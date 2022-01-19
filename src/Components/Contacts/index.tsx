import React from "react";
import styles from "./styles.module.scss";

export const Contacts = () => {
  return (
    <nav className={`${styles.Contacts} flex column crossCenter`}>
      <input placeholder="Pesquisar" />
      Nenhum usuário criado
    </nav>
  );
};

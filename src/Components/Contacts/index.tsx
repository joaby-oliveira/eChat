import React from "react";
import styles from "./styles.module.scss";
import { AiOutlinePlus } from "react-icons/ai";

export const Contacts = () => {
  return (
    <nav className={`${styles.Contacts} flex column crossCenter`}>
      <div className={`${styles.top}`}>
        <input placeholder="Procurar contato" />{" "}
        <div className={`${styles.addContact} flex mainCenter crossCenter`}>
          <AiOutlinePlus size={24} color="#F2EDFE" />
        </div>
      </div>
      <p className={`${styles.noUser}`}>Nenhum usuário criado</p>
    </nav>
  );
};

import React from "react";

import styles from "./styles.module.scss";
import { AiOutlineGoogle } from "react-icons/ai";

export const Button: React.FC<{
  type: string;
  fillParent: boolean;
  onClick: any;
}> = ({ children, fillParent, type, onClick }) => {
  if (type === "google") {
    return (
      <button
        onClick={onClick}
        className={`${styles.Button} ${styles.google} ${
          fillParent ? styles.fillParent : ""
        } ${styles[type]} flex mainCenter crossCenter`}
      >
        <AiOutlineGoogle />
        <span>Entrar com google</span>
      </button>
    );
  }
  return (
    <button
      className={`${styles.Button} ${fillParent ? styles.fillParent : ""} ${
        styles[type]
      } flex mainCenter crossCenter`}
    >
      {children}
    </button>
  );
};

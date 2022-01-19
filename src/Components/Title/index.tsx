import React from "react";
import styles from "./styles.module.scss";

export const Title = (props) => {
  return (
    <h1 className={`${styles.Title} flex column crossCenter`}>
      {props.children}
    </h1>
  );
};

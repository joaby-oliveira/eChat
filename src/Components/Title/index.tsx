import React from "react";
import styles from "./styles.module.scss";

interface Props {
  props: any;
  children: any;
}

export const Title: React.FC<{}> = ({ children }) => {
  return (
    <h1 className={`${styles.Title} flex column crossCenter`}>{children}</h1>
  );
};

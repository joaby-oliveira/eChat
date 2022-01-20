import React from "react";
import styles from "./styles.module.scss";

interface Props {
  props: any;
  children: any;
}

export const Title: React.FC<{ type: string }> = ({ children, type }) => {
  if (type === "h2") {
    return (
      <h2 className={`${styles.Title} ${styles.h2} flex column crossCenter`}>
        {children}
      </h2>
    );
  }
  return (
    <h1 className={`${styles.Title} flex column crossCenter`}>{children}</h1>
  );
};

import React, { Children } from "react";

import styles from "./styles.module.scss";

export const Button: React.FC = ({ children }) => {
  return <button className={`${styles.Button}`}>{children}</button>;
};

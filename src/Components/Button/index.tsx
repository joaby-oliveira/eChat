import React, { Children } from "react";

import styles from "./styles.module.scss";

export const Button: React.FC<{ type: string; fillParent: boolean }> = ({
  children,
  fillParent,
  type,
}) => {
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

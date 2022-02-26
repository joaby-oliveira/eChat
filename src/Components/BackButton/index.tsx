import Link from "next/link";
import React from "react";
import { AiOutlineRollback } from "react-icons/ai";
import styles from "./styles.module.scss";

export const BackButton: React.FC = () => {
  return (
    <Link href="../">
      <a className={`${styles.backButton} flex mainCenter crossCenter`}>
        <AiOutlineRollback color="#fff" size={32} />
      </a>
    </Link>
  );
};

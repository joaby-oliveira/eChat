import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import house from "../../../public/house.png";
import { Title } from "../Title";

export const Header = () => {
  return (
    <header className={`${styles.Header} flex`}>
      <Image src={house} alt="Início" />
      <Title>início</Title>
    </header>
  );
};

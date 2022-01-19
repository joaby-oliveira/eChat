import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import house from "../../../public/house.png";
import { Title } from "../Title";
import Link from "next/link";
import profile from "../../../public/profile.png";

export const Header = () => {
  return (
    <header className={`${styles.Header} flex spaceBetween`}>
      <div className={`flex crossCenter`}>
        <Image src={house} alt="Início" />
        <Title>início</Title>
      </div>
      <Link href="user">
        <a>
          <Image width={37} height={37} alt="user" src={profile} />
        </a>
      </Link>
    </header>
  );
};

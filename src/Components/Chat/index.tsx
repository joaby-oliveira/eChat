import React from "react";
import { Title } from "../Title";
import styles from "./styles.module.scss";
import Image from "next/image";
import noContact from "../../../public/noContact.png";
import { Button } from "../../Components/Button";

export const Chat = () => {
  return (
    <div className={`${styles.Chat} flex column mainSpaceBetween crossCenter`}>
      <Title>você ainda não tem nenhuma conversa</Title>
      <Image src={noContact} alt="Adicione contatos" />
      <Button>adicionar seu primeiro contato</Button>
    </div>
  );
};

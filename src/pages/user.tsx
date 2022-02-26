import type { NextPage } from "next";
import Head from "next/head";

import styles from "./styles.module.scss";

import { Title } from "../Components/Title";
import { AiOutlineEdit, AiOutlineRollback } from "react-icons/ai";
import profile from "../../public/profile.png";
import Image from "next/image";
import { Button } from "../Components/Button";
import { BackButton } from "../Components/BackButton";

const User: NextPage = () => {
  return (
    <>
      <Head>
        <title>Usuário</title>
        <meta name="description" content="Joaby Oliveira e chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${styles.animated} ${styles.profile} flex column crossCenter`}
      >
        <BackButton />
        <div className={`${styles.profileWrapper} flex column crossCenter`}>
          <Image alt="user" src={profile} />
          <div className={`${styles.editButton} flex mainCenter crossCenter`}>
            <AiOutlineEdit color="#fff" size={32} />
          </div>
          <Title type="h2">marcelo</Title>
          <p className={`${styles.userId}`}>#0002</p>
        </div>
        <hr />
        <form className={`${styles.form} flex column`}>
          <Title type="h2">dados pessoais</Title>
          <div className={`${styles.inputsContainer} flex column`}>
            <input className={`${styles.input}`} value={"marcelo@gmail.com"} />
            <input className={`${styles.input}`} value={"marcelo"} />
            <input className={`${styles.input}`} value={"********"} />
          </div>
          <hr />
        </form>
        <div className={`${styles.actions}`}>
          <Title type="h2">ações</Title>
          <Button fillParent={true} type="error">
            <AiOutlineRollback size={24} />
            sair
          </Button>
        </div>
      </main>
    </>
  );
};

export default User;

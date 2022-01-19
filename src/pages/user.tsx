import type { NextPage } from "next";
import Head from "next/head";

import styles from "./styles.module.scss";

import { Title } from "../Components/Title";
import Link from "next/link";

const User: NextPage = () => {
  return (
    <>
      <Head>
        <title>Usuário</title>
        <meta name="description" content="Joaby Oliveira e chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.animated}`}>
        <Title>USUÁRIO</Title>
        <Link href="../">
          <a>Voltar</a>
        </Link>
      </main>
    </>
  );
};

export default User;

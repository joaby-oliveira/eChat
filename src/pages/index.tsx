import type { NextPage } from "next";
import Head from "next/head";

import styles from "./styles.module.scss";

import { Header } from "../Components/Header";
import { Contacts } from "../Components/Contacts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>e-Chat</title>
        <meta name="description" content="Joaby Oliveira e chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Header />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
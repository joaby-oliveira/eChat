import type { NextPage } from "next";
import Head from "next/head";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "./styles.module.scss";

import { Header } from "../Components/Header";
import { Contacts } from "../Components/Contacts";
import { Chat } from "../Components/Chat";
import { Button } from "../Components/Button";

const Home: NextPage = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDYz87kKB0E9hRGNEjxvR37GQvwsDNTrvA",
    authDomain: "echat-22.firebaseapp.com",
    projectId: "echat-22",
    storageBucket: "echat-22.appspot.com",
    messagingSenderId: "566162460619",
    appId: "1:566162460619:web:548d7ced8fb850ef86f04e",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <>
      <Head>
        <title>e-Chat</title>
        <meta name="description" content="Joaby Oliveira e chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.container} ${styles.animated}`}>
        <Header />
        <Contacts />
        <Chat />
      </main>
    </>
  );
};

export default Home;

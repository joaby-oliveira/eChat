import { NextPage } from "next";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { BackButton } from "../Components/BackButton";
import { Button } from "../Components/Button";
import { Title } from "../Components/Title";
import styles from "./styles.module.scss";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Sign: NextPage = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDYz87kKB0E9hRGNEjxvR37GQvwsDNTrvA",
    authDomain: "echat-22.firebaseapp.com",
    projectId: "echat-22",
    storageBucket: "echat-22.appspot.com",
    messagingSenderId: "566162460619",
    appId: "1:566162460619:web:548d7ced8fb850ef86f04e",
  };
  const app = initializeApp(firebaseConfig);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
    } catch (e: any) {
      console.log();
      if (e.message.indexOf("auth/email-already-in-use") !== -1) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
        // Now it's just store this data with the context api
        // And then you can return some errors like the password one
      }
    }
  }

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function signWithGoogle(e: SyntheticEvent) {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    // Now it's just store this data with the context api
  }

  return (
    <main
      className={`flex column mainCenter crossCenter animated ${styles.sign}`}
    >
      <Title type="h1">Entrar ou criar uma nova conta</Title>
      <BackButton />
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={`flex column ${styles.form}`}>
          <input
            id="email"
            className={styles.input}
            placeholder="Email"
            type="email"
            onChange={handleChange}
            value={form.email}
          />
          <input
            id="password"
            className={styles.input}
            placeholder="Senha"
            type="password"
            onChange={handleChange}
            value={form.password}
          />
          <Button onClick="" type="" fillParent={true}>
            Entrar
          </Button>
          <Button onClick={signWithGoogle} type="google" fillParent={true} />
        </form>
      </div>
    </main>
  );
};

export default Sign;

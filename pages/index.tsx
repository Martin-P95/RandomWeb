import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/auth.context";
import { Number } from "@prisma/client";
import { useState } from "react";
import axios from "../lib/axios.client"

const Home: NextPage = () => {
  const { user, signOut } = useAuth();
  console.log(user && user.username);
  const novecislo = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const ulozitcislo = async () => {
    const number = await axios.post("/api/save", { number: cislo });
    console.log(number);
  };
  const [cislo, setCislo] = useState(0);
  const [min, setmin] = useState(1);
  const [max, setmax] = useState(100);
  return (
    <>
      <div className="hlavnís">
        <div className="navbar">
          {user ? (
            <a className="login" onClick={signOut} href="\">
              Odhlásit
            </a>
          ) : (
            <a className="login" href="/login">
              přihlásit
            </a>
          )}

          <img src="/LogoR.svg" alt="" className="logo" />
          {user ? (
            <a className="login2" href="\user">
              {" "}
              Přihlášen jako:{user.username}
            </a>
          ) : (
            <div className="login2">Nejte přihlášen</div>
          )}
        </div>
        <div className="container">
          <h1 className="textn">{cislo}</h1>
          <section>
            <div className="inputy">
              <label className="text2">Zadejte minimální číslo:</label>
              <input
                type="number"
                className="input"
                value={min}
                onChange={(e) => setmin(+e.target.value)}
              />
            </div>
            <div className="inputy">
              <label className="text2">Zadejte maximální číslo:</label>
              <input
                type="number"
                className="input"
                value={max}
                onChange={(e) => setmax(+e.target.value)}
              />
            </div>
          </section>
          <section>
            <button
              className="tlačítko"
              onClick={() => setCislo(novecislo(min, max))}
            >
              Vygenerovat číslo
            </button>
            <button className="tlačítko" onClick={ulozitcislo}>
              Uložit
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

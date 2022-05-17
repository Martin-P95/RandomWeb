import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/auth.context";

const Home: NextPage = () => {
  const { user } = useAuth();
  console.log(user && user.username);

  return (
    <>
      <div className="hlavnís">
        <div className="navbar">
          <img src="/LogoR.svg" alt="" className="logo" />
          {user ? (
            <div> Přihlášen jako:{user.username}</div>
          ) : (
            <div>Nejte přihlášen</div>
          )}
        </div>
        <div className="container">
          <h1 className="textn">7</h1>
          <section>
            <div className="inputy">
              <label className="text2">Zadejte minimální číslo:</label>
              <input type="number" className="input" />
            </div>
            <div className="inputy">
              <label className="text2">Zadejte maximální číslo:</label>
              <input type="number" className="input" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/auth.context";

const Home: NextPage = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <div className="hlavnís">
        <div className="navbar">
          <img src="/LogoR.svg" alt="" className="logo" />
        </div>
        <div className="container">
          <h1 className="textn">7</h1>
          <div className="inputy">
            <h3 className="text2">Zadejte číslo:</h3>
            <input type="number" className="input" />
            <h3 className="text2">Zadejte číslo:</h3>
            <input type="number" className="input" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

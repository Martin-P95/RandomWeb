import React from "react";
import { Number, PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import Link from 'next/link';
import axios from "../lib/axios.client"

type Props = {
  numbers: Array<Number>;
};

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const prisma = new PrismaClient();
  const numbers = await prisma.number.findMany();
  return {
    props: {
      numbers,
    },
  };
};

export default function user({ numbers }: Props) {
 async function remove(id:number){
await axios.post("/api/delete",{id});
  }
  return (
    <section className="backgroundU">
      <p className="nadpisU">Vaše čísla</p>
      <section className="card2">
        {numbers.map((number, index) => (
          <div key={number.id}>
            {index + 1}. {number.number}
            <button onClick={()=>remove(number.id)} className="delete">Odebrat</button>
            </div>
          
        ))}
      </section>
      <Link href="/">
        <a className="odejít">Odejít</a>
      </Link>
    </section>
  );
}

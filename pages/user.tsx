import React from "react";
import { Number, PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
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
  return (
    <section className="backgroundU">
      <p className="nadpisU">Vaše čísla</p>
      <section className="card2">
        {numbers.map((number, index) => (
          <div key={number.id}>
            {index + 1}. {number.number}
          </div>
        ))}
      </section>
      <a href="/" className="odejít">
        Odejít
      </a>
    </section>
  );
}

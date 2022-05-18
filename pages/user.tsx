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
      <h1 className="nadpisU">Vaše čísla</h1>
      <section className="card">
        {numbers.map((number) => (
          <div key={number.id}>{number.number}</div>
        ))}
      </section>
    </section>
  );
}

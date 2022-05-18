import React from 'react'
import { Number, PrismaClient } from "@prisma/client";
type Props = {}

const prisma = new PrismaClient();
export async function getServerSideProps(context) {
    return {
      props: {prisma}, 
    }
  }
  

export default function user({}: Props) {
  return (
    
  )
}
'use client'
import Image from "next/image";
import React from "react";
import { NameList } from "../../components/page/NameList";

export default function Home() {
  return (
    <>
      <a>To do list</a>
      <article className={classes.article}>
        <NameList className={classes.namelist}/> 
      </article> 
    </>
  );
}

let classes ={
  article: /* class= */"w-2/1 border-8 top-8 p-2 bg-teal-200 border-yellow-400 table",
  /* class="bg-red-600" */
}
import { useEffect } from "react";
import Layout from "components/layout";

import Link from "next/link";
import Typical from "react-typical";

export default ({ initialQueriesData }) => {
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 leading-relaxed">
        <Typical
          steps={[
            "Bienvenue!",
            2000,
            "Bienvenido!",
            2000,
            "Hola!",
            2000,
            "Welcome!",
            2000,
            "!أهْلاً وَسَهْلاً ",
            2000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
        <p className="mt-6">
         Nice to meet you! In case you don’t know me yet, feel free to check out my{" "}
          <Link href="/about">
            <a className=" text-primary">about</a>
          </Link>{" "}
          page.
         
          Here, you can find more information about my{" "}
          <Link href="/work">
            <a className="text-primary">projects</a>
          </Link>
          &nbsp;{" "}
          <Link href="/thoughts/">
            <a className=" text-primary">thoughts and ideas</a>
          </Link>
          &nbsp;I have on different&nbsp;topics.
          I also compile a{" "}
          <Link href="/collections/">
            <a className=" text-primary">collection</a>
          </Link>
          &nbsp;of books, movies, and articles I particularly like and
          recommend.
        
          If you have an interesting project or just want to grab a coffee and
          chat, don’t hesitate to{" "}
          <a className="text-primary" href="comerford.fynn@gmail.com">
            drop me a line
          </a>
          .
        </p>
        <img src="/img/signature.png" className="h-24 mt-8" />
      </div>
    </Layout>
  );
};

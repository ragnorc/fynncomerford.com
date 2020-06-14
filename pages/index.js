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
            "Salllut!",
            2000,
            "Ciao!",
            2000,
            "Hola!",
            2000,
            "Hello!",
            2000,
            "!أهلاً",
            2000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
        <p className="mt-6">
         In case you don’t know me yet, feel free to check my{" "}
          <Link href="/about">
            <a className=" text-primary">about</a>
          </Link>{" "}
          page.
          <br />
          Here, you can find more information about my{" "}
          <Link href="/projects">
            <a className="text-primary">projects</a>
          </Link>
          &nbsp;{" "}
          <Link href="/thoughts/">
            <a className=" text-primary">thoughts and ideas</a>
          </Link>
          &nbsp;I have on different&nbsp;topics.
          <br />I also compile a{" "}
          <Link href="/collections/">
            <a className=" text-primary">collection</a>
          </Link>
          &nbsp;of books, movies, and articles I particularly like and
          recommend.
          <br />
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

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
            "Benvenuti!",
            2000,
            "Welcome!",
            2000,
            "!أهْلاً وَسَهْلاً ",
            2000,
            "Willkommen!",
            2000,
            "Добро пожаловать!",
            2000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
        <p className="mt-6">
         Thanks for being here. If you don't know me yet, have a quick look at my {" "}
          <Link href="/about">
            <a className=" text-primary">about</a>
          </Link>{" "}
          page.

     Here, I have outlined some of the {" "}
          <Link href="/work">
            <a className="text-primary">projects </a>
          </Link>
          I am working on and have done in the past. 
          
          
           you can read a bit about my thoughts as well as topics I am currently interested in.
          
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
        
      </div>
    </Layout>
  );
};

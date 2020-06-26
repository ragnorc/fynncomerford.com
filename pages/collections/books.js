import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-2/3 leading-relaxed">
        <h1 className="text-5xl font-bold mb-5">
          <span className="text-primary">B</span>
          ooks
        </h1>

        <a target="_blank" className="">
          Call me by your name, André Aciman
          <br />
        </a>
        <a target="_blank" className="">
          A crack in creation, Jennifer A. Doudna 
      
          <br />
        </a>
        <a target="_blank" className="">
          The man who mistoom his wife for a hat, Oliver Sacks

 
  
          <br />
        </a>
        <a target="_blank" className="">
          We should all be feminists, Chimamanda Ngozi Adichie
      
          <br />
        </a>
        <a target="_blank" className="">
          Homo Deus, Yuval Noah Harari 
      
          <br />
        </a>
        <a target="_blank" className="">
          Shake hands with the devil: The Failure of Humanity in Rwanda, Roméo Dallaire 
      
          <br />
        </a>
        <a target="_blank" className="">
          The Gene, Siddhartha Mukherje
      
          <br />
        </a>
        <a target="_blank" className="">
          The Omnivores Dilemma, Michael Pollan 
      
          <br />
        </a>
      </div>
    </Layout>
  );
};

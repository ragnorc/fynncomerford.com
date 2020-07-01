import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-2/3 leading-relaxed">
        <h1 className="text-5xl font-bold mb-5">
          <span className="text-primary">b</span>
          ooks
        </h1>

        <a target="_blank" className="">
        
          <span class="italic"> Call me by your name, </span>
André Aciman
          <br />
        </a>
        
        <a target="_blank" className="">
         <span class="italic"> A crack in creation, </span>
           Jennifer A. Doudna 
      
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The man who mistook his wife for a hat, </span>
         Oliver Sacks

 
  
          <br />
        </a>
        <a target="_blank" className="">
         <span class="italic"> We should all be feminists,</span> Chimamanda Ngozi Adichie
      
          <br />
        </a>
        <a target="_blank" className="">
          <span class="italic">Homo Deus and Homo Sapiens,</span> Yuval Noah Harari 
      
          <br />
        </a>
        <a target="_blank" className="">
          <span class="italic">Shake hands with the devil: The Failure of Humanity in Rwanda,</span> Roméo Dallaire 
      
          <br />
        </a>
        <a target="_blank" className="">
          <span class="italic">The Gene,</span> Siddhartha Mukherje
      
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic">Deep Medicine,</span> Eric Topol
        <br />
        <a target="_blank" className="">
          <span class="italic">The Omnivores Dilemma,</span> Michael Pollan 
      
          <br />
        </a>
      </div>
    </Layout>
  );
};

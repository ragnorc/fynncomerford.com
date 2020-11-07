import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-30 leading-relaxed">
        <h1 className="text-5xl font-bold mb-5">
          <span className="text-primary">p</span>
          eople
        </h1>
        

        <a target="_blank" className="">
        
          <span class="italic"> Jennifer Doudna, </span>
Biochemist and leading figure in CRISPR-based genome editing
          <br />
          <br />
        </a>
        
        <a target="_blank" className="">
         <span class="italic"> George Church, </span>
          Harvard geneticist and "father of synthetic biology"
          <br />
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> Oliver Sacks, </span>
        Neurologist and Author
 
          <br />
          <br />
          
        </a>
        <a target="_blank" className="">
         <span class="italic"> Laura Deming,</span> Venture Capitalist focussed on lifespan-extension
          <br />
          <br />
        </a>
        <a target="_blank" className="">
         <span class="italic"> Phil Dunphy,</span> :)
          <br />
          <br />
        </a>
        
        <a target="_blank" className="">
         <span class="italic"> Rick Hanson,</span> Author of "The Neuroscience of Buddha"
          <br />
          <br />
        </a>
        <a target="_blank" className="">
         <span class="italic"> Claire Wineland,</span> Activist who chronicled her fight with cystic fibrosis 
          <br />
          <br />
        </a>
        <a target="_blank" className="">
         <span class="italic"> Jon Kabat-Zinn,</span> Creator of mindfulness-based-stress-reduction program
          <br />
          <br />
        </a>
         <a target="_blank" className="">
         <span class="italic"> Sam Berns,</span> Activist
          <br />
          <br />
        </a>
       
        
      </div>
    
    </Layout>
  );
};

import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-2/3 leading-relaxed">
        <h1 className="text-5xl font-bold mb-5">
          <span className="text-primary">p</span>
          eople
        </h1>

        <a target="_blank" className="">
        
          <span class="italic"> Jennifer Doudna, </span>
Biochemist at Berkeley and leading figure in CRISPR-based genome editing
          <br />
        </a>
        
        <a target="_blank" className="">
         <span class="italic"> George Church, </span>
          Harvard geneticist and "father of synthetic biology"
      
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> Oliver Sacks, </span>
        Neurologist and Author
 
  
          <br />
        </a>
        <a target="_blank" className="">
         <span class="italic"> Laura Deming,</span> Venture Capitalist focussed on lifespan-extension
      
          <br />
        </a>
        
        
       
        
      </div>
    
    </Layout>
  );
};

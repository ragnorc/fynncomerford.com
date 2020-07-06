import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-2/3 leading-relaxed">
        <h2>Movies</h2>
        <ul>
        <li>
        <a target="_blank" className="">
        
          <span class="italic"> Call Me By Your Name, </span>
Luca Guadagnino
          <br />
        </a>
        </li>
        <li>
        
        <a target="_blank" className="">
         <span class="italic"> HUMAN, </span>
           Yann Arthus-Bertrand
      
          <br />
        </a>
        </li>
        <li>
        <a target="_blank" className="">
        <span class="italic"> Inception, </span>
         Christopher Nolan

 
  
          <br />
        </a>
        </li>
        <li>
        <a target="_blank" className="">
         <span class="italic"> Desert Flower,</span> Sherry Hormann
      
          <br />
        </a>
        </li>
        <li>
        <a target="_blank" className="">
          <span class="italic">The Man Who Knew Infinity,</span> Matt Brown 
      
          <br />
        </a>
        </li>
        <li>
        <a target="_blank" className="">
          <span class="italic">The Theory of Everything,</span> James Marsh 
      
          <br />
        </a>
        </li>
        
        
<li>
        <a target="_blank" className="">
          <span class="italic">Forrest Gump,</span> Robert Zemeckis
      
          <br />
        </a>
        </li>
        <li>
        <span class="italic">Schindler's list,</span> Steven Spielberg
        <br />
        </li>
        </ul>
        <h2>Series</h2>
        <ul>
        <li>
        <a target="_blank" className="">
          <span class="italic">The Big Bang Theory,</span> Chuck Lorre  
      
          <br />
        </a>
        </li>
        <li>
        <a target="_blank" className="">
          <span class="italic">Modern Family,</span> Christopher Lloyd
      
          <br />
        </a>
        </li>
        <li>
        <a target="_blank" className="">
          <span class="italic">Narcos,</span> Chris Brancato 
      
          <br />
        </a>
        </li>
    
        </ul>
        
        <h2>
        Videos
        </h2>
        <ul>
        <li>
        <a target="_blank" className="">
          <span class="italic">The Standford Prison Experiment,</span> Kyle Patrick Alvarez 
      
          <br />
        </a>
        </li>
        </ul>
      </div>
    
    </Layout>
  );
};

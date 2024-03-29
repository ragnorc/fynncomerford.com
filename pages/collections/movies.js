import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-2/1 leading-relaxed">
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
        
          <span class="italic"> Where The Crawdads Sing, </span>
Olivia Newman
          <br />
        </a>
        </li>
        <li>
        <a target="_blank" className="">
        
          <span class="italic"> The Dreamers, </span>
Bernardo Bertolucci
          <br />
        </a>
        </li>
         <li>
        <a target="_blank" className="">
        
          <span class="italic"> The Social Dilemma, </span>
Jeff Orlowski
          <br />
        </a>
        </li>
        
        <li>
        <a target="_blank" className="">
        
          <span class="italic"> Parasite, </span>
Bong Joon Ho
          <br />
        </a>
        </li>
        <li>
        
        <a target="_blank" className="">
         <span class="italic"> Human, </span>
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
          <span class="italic">1917,</span> Sam Mendes 
      
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
        <span class="italic">One Day,</span>  Lone Scherfig
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
        <li>
        <a target="_blank" className="">
          <span class="italic">Silicon Valley,</span> Mike Judge
      
          <br />
        </a>
        </li>
    
        </ul>
        
        <h2>
        Videos
        </h2>
        <ul>
        <li>
        <a href="https://www.youtube.com/watch?v=XuyADFBAe2Q&list=WL&index=25&t=0s" className="">
          <span class="italic">A Thing About Life,</span> YouTube 
      
          <br />
        </a>
        </li>
       
        </li>
        <li>
        <a href="https://www.youtube.com/watch?v=foT9rsHmS24&list=WL&index=125&t=0s" className="">
          <span class="italic">The Worlds Worst Translator,</span> YouTube 
      
          <br />
        </a>
        </li>
        <li>
        <a href="https://www.youtube.com/watch?v=3raVUTPAd-w&list=WL&index=140&t=154s" className="">
          <span class="italic">Morning Ocean Wave Sound at Baker Beach,</span> YouTube 
      
          <br />
        </a>
        </li>
        </ul>
      </div>
    
    </Layout>
  );
};

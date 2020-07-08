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
       <ul>
       <li>
        <a target="_blank" className="">
        
          <span class="italic"> Call me by your name, </span>
André Aciman
          <br />
        </a>
        <li>
        <a target="_blank" className="">
         <span class="italic"> A crack in creation, </span>
           Jennifer A. Doudna 
      
          <br />
        </a>
        <li>
        <a target="_blank" className="">
        <span class="italic"> The man who mistook his wife for a hat, </span>
         Oliver Sacks

 
  
          <br />
        </a>
        <li>
        <a target="_blank" className="">
         <span class="italic"> We should all be feminists,</span> Chimamanda Ngozi Adichie
      
          <br />
        </a>
        <li>
        <a target="_blank" className="">
          <span class="italic">Homo Deus and Homo Sapiens,</span> Yuval Noah Harari 
      
          <br />
        </a>
        <li>
        <a target="_blank" className="">
          <span class="italic">Shake hands with the devil,</span> Roméo Dallaire 
      
          <br />
        </a>
        <li>
        <a target="_blank" className="">
          <span class="italic">The Gene,</span> Siddhartha Mukherje
      
          <br />
        </a>
        
        <span class="italic">Deep Medicine,</span> Eric Topol
        <br />
        <li>
        <a target="_blank" className="">
          <span class="italic">The Omnivores Dilemma,</span> Michael Pollan 
      
        <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> Why We Sleep, </span>
         Matthew Walker 

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The Art of Happiness, </span>
         Dalai Lama XIV and Samuel H. Sternberg 

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The Art of Thinking Clearly, </span>
         Rolf Dobelli 
      

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The Happiness Project, </span>
         Gretchen Rubin  
      

 
  
          <br />
        </a><a target="_blank" className="">
        <span class="italic"> Zero to Five, </span>
         Pether Thiel and Blake Master 
      

 
  
          <br />
        </a><a target="_blank" className="">
        <span class="italic"> The Climb, </span>
         Anatoli Boukreev and G, Weston DeWalt  
      

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> Full Catastrophe Living, </span>
         Jon Kabat-Zinn  
      

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> I am Malala, </span>
         Malala Yousafzai  
      

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The Undoing Project, </span>
         Michael Lewis  
      

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The Odyssey, </span>
         Homer  
      

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The Cider House Rules, </span>
         John Irving  
      

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The Brain that Changes Itself, </span>
         Norman Doidge  
      

 
  
          <br />
        </a>
        <a target="_blank" className="">
        <span class="italic"> The Power of Habit, </span>
         Charles Duhigg  
      

 
  
          <br />
        </a>
        <br />
        <br />
        <br />
        <br />
         <p>If you want to see my complete bookshelf, checkout my GoodReads<a href="https://www.goodreads.com/user/show/68328870-fynn" className="underline"> here</a></p>
        <br/>
        </ul>
      </div>
    
    
    </Layout>
  );
};

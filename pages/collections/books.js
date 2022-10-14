import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-2/1 leading-relaxed">
        <h1 className="text-5xl font-bold mb-5">
          <span className="text-primary">b</span>
          ooks
        </h1>
       
        <a target="_blank" className="">
        
          <span class="italic"> Call Me By Your Name, </span>
André Aciman
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> Genentech, </span>
Sally Smith Hughes
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> Deep Medicine, </span>
Eric Topol 
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> The Art of Thinking Clearly, </span>
Ralf Dobelli 
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> Lifespan, </span>
David Sinclair
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> The Little Book of Stoicism, </span>
Jonas Salzberger
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> Life Lessons From The Monk Who Sold His Ferrari, </span>
Robin Sharma
          <br />
        </a>

         <a target="_blank" className="">
        
          <span class="italic"> How Not To Die, </span>
Michael Greger
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic">Where The Crawdads Sing, </span>
Delia Owen
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> The Song of Achilles, </span>
Madeleine Miller 
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> The Kite Runner, </span>
Khaled Hosseini
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> Full Catastrophe Living, </span>
Jon Kabat-Zinn
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> The Man Who Mistrook His Wife For A Hat, </span>
Oliver Sacks
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic"> Man's Search For Meaning, </span>
Viktor Frankl
          <br />
        </a>

         <a target="_blank" className="">
        
          <span class="italic"> A Short History of Nearly Everything, </span>
Bill Bryson
          <br />
        </a>
        <a target="_blank" className="">
        
          <span class="italic">The Art Of Happiness, </span>
Dalai Lama XIV
          <br />
        </a>
         <a target="_blank" className="">
        
          <span class="italic">The Art Of Happiness, </span>
Dalai Lama XIV
          <br />
        </a>

         <a target="_blank" className="">
        
          <span class="italic">The Gene, </span>
Siddhartha Mukherje
          <br />
        </a>

         <a target="_blank" className="">
        
          <span class="italic">Why We Sleep, </span>
Matthew Walker
          <br />
        </a>
        <a target="_blank" className="">
        
          <span class="italic">The Body Keeps The Score, </span>
Bessel Van Der Kolk 
          <br />
        </a>
        <a target="_blank" className="">
        
          <span class="italic">What Happened To You, </span>
Bruce Perry 
          <br />
        </a>

         <a target="_blank" className="">
        
          <span class="italic">Shake Hands With The Devil, </span>
Romeo Dallaire
          <br />
        </a> <a target="_blank" className="">
        
          <span class="italic">Regenesis, </span>
George Church
          <br />
        </a>
        <a target="_blank" className="">
        
          <span class="italic">Range, </span>
David Epstein
          <br />
        </a>
        <a target="_blank" className="">
        
          <span class="italic">The Selfish Gene, </span>
Richard Dawkins
          <br />
        </a>
       
        <a target="_blank" className="">
        
          <span class="italic">A Crack In Creation, </span>
Jennifer Doudna
          <br />
        </a>
        <a target="_blank" className="">
        
          <span class="italic">The Power Of Habit, </span>
Charles Duhigg
          <br />
        </a>
        
        
        
        
        
        
        
        
        
        
        
        
        
 
  
          <br />
        
        <br />
        <br />
        <br />
        <br />
         <p>If you want to see my complete bookshelf, checkout my GoodReads<a href="https://www.goodreads.com/user/show/68328870-fynn" className="underline"> here</a></p>
        <br/>
        
      </div>
    
    
    </Layout>
  );
};

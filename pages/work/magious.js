import Image from "components/image";
import Layout from "components/layout";

export default () => {
  return (
    <Layout>
      <div className="flex flex-col px-18 lg:px-24 w-full leading-relaxed ">
        <div className="flex mb-20">
          <div>
            <h1 className="text-5xl font-bold mb-8">Magious</h1>
            <p>
              <strong>Type:</strong> Self-employed 
            </p>
            <p>
              <strong>Period:</strong> 2015 - 2017
            </p>
            <p>
              <strong>Collaborators:</strong>&nbsp;
              <a
                target="_blank"
                className="underline"
                href="https://ragnor.co/"
              >
                Ragnor Comerford
              </a>
            
            </p>
            <p>
              <strong>Location:</strong> Bonn, Germany
            </p>
           
            <a href="https://epfl.ch">
              <img className="w-1/6 h-auto mt-5" src="/img/illustrations/magiouslogo.jpg" />
            </a>
          </div>
        </div>
        <p>
          As interested readers, me and my brother were used to grab magazines whenever we found a interesting one. The problem was, that there were so many interesting magazines, each usually focussing on a specific niche. We usually read a couple of articles that caught our interest and moved on to the next one. Consequently, we ended up with tons of magazines at home. 
        </p>

        <p className="mt-5">
          This gave us our idea. Our problem was, that most magazines focus on a specific niche, for example photography, nutrition and sport, politics etc. and if you were interested in different topics, you would have to buy magazines for each topic, which is costly and inconvenient. Our idea, thus, was to create a platform, on which costumers could chose articles or topics from popular magazines and create their own, personalized magazine. A person interested in model planes, economy and geography would not have to buy magazines for each but take his favourite articles or categories from these magazines and combine them to a single one, tailored to his individual interests.
        </p>
        <div className="flex flex-col items-center w-100 mb-10 rounded-lg">
          <img
            className="mt-5 mb-5 w-1/2"
            src="/img/illustrations/magiouslanding.png"
          ></img>
          
        
        </div>
        <p>
          We started working on our startup during highschool and launched it in February 2017. We cooperated with several publishers as well as independent authors to provide costumers with as much content to choose from as possible.
        </p>
        <p>
          Meanwhile, several start-up blogs started writing about our idea which caught the attention of a Germany-based publishing company. We collaborated with Schaffrath Medien on the development of new personalised print-product for other big publishing houses. 
        </p>
        <div className="flex flex-row flex-wrap justify-center w-100 mt-10 mb-20">
          <div className="flex flex-col items-center justify-center">
            <img 
            className="mt-5 mb-5 w-1/2"
            src="/img/illustrations/magiousmagazines.jpg" />
            
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
            className="mt-5 mb-5 w-1/2"
            src="/img/illustrations/magiousarticles.jpg" />
           
          </div>
        </div>
        <p>
          We maintained a tight collaboration which helped us finance our studies until moving to Edinburgh to study.
        </p>
        <div className="flex flex-col items-center w-100 my-10">
          <img className="mt-5 mb-2 w-2/5" src="/img/illustrations/magiouspresent.png" />
        
        </div>
        <h2 className="text-xl font-bold mb-2">Here are some of the articles about Magious (German)</h2>
        <div className="italic">
      
          <a href="https://www.startupvalley.news/de/tag/magious/">Startupvalley.com</a>
          <br />
        <a href="https://www.deutsche-startups.de/2015/04/01/magious-vereint-alle-interessen-einer-zeitschrift/">Deutschestartups.de</a>
        <br />
        <a href="https://www.vocer.org/magious-gedruckte-nachrichten-a-la-carte/">Vocer.org</a>
        <br />
        <a href="https://nrw-startups.de/2015/magious-personalisiert-zeitschriften/">NRWstartups.de</a>
        <br />
        <a href="https://senkrechtstarter-blog.de/2015/04/personalisierte-zeitschrift-magious/">Senkrechtstarter.de</a>
       <br />
      
     <p> And a little YouTube <a href="https://www.youtube.com/watch?v=2dtplZWep_Y&t=233s" className="underline">review </a>by StartupWilli </p>
     </div>
   </div>
    </Layout>
  );
};

import Image from "components/image";
import Layout from "components/layout";

export default () => {
  return (
    <Layout>
      <div className="flex flex-col px-18 lg:px-24 w-full leading-relaxed">
        <div className="flex mb-20">
          <div>
            <h1 className="text-5xl font-bold mb-8"></h1>
            

            
          </div>
        </div>
       
        
      </div>
    
      <h1> Publications </h1>
      <br />
      <br />
      
      <h4>Here is an overview of some research papers,   articles and essays I have published.</h4>
      <br /> 
      <br />
      
      <h2>Research</h2>
      <br />
    
      <div className="shadow-black rounded-lg bg-gray-100 mb-6">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img className="w-1/6 h-auto " src="/img/illustrations/medicalresearch.svg" />
                  <div className="border-l-2 h-10 border-black mx-5 rounded-xl"></div>
                  <h6 href="https://www.researchgate.net/publication/345848669_A_Comparison_of_Machine_Learning_Approaches_for_Predicting_the_Progression_of_Crohn's_Disease"className="text-lg">Comerford, F., Comerford, R., Hussain Z., Ng, N., Hussain, A., Khan, A., Lees, C. A., "A Comparison of Machine Learning Approaches for Predicting the Progression of Crohn's Disease"<span className="italic">SCOReD</span>Batu Pahat, Johor, Malaysia, 2020, pp. 529-533, doi: 10.1109/SCOReD50371.2020.9251019.</h6>
                </div>
                </div>
                
            
              <br />
              
       </Layout>         
              
              
  );
};

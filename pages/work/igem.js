import Layout from "components/layout";
import Link from "next/link";
import Image from "components/image";
import { Masonry } from "masonic";

export default () => {
  const photos = [
    "hyped/hyped-group-photo.jpeg",
    "hyped/software-team.jpg",
    "hyped/hyped-elon-musk.jpg",
    "hyped/isabella-ragnor-working.jpg",
    "hyped/spacex-tube-interior.jpg",
    "hyped/spacex-falcon.jpg",
    "hyped/spacex-tube.jpg",
  ];

  return (
    <Layout>
      <div className=" flex flex-col px-18 lg:px-24 w-full leading-relaxed">
        <div className="flex mb-20">
          <img
            style={{ boxShadow: "0px 0px 45px 10px rgba(45, 56, 104, 0.5" }}
            src="/img/illustrations/igemcompetition.png"
            className="rounded-lg w-1/4 mr-20 mb-4 hidden md:block xl:block xxl:block"
          ></img>

          <div>
            <h1 className="text-5xl font-bold mb-8">Finding Nemo </h1>
            <p>
              <strong>Status:</strong> Finished
            </p>
            
            <p>
              <strong>Collaborators:</strong> Matteo Cese, 	Alexandru Popov, Ziyuan Xie, Samy zebda, Ying Yang, Jingyao Zhou, Bingyu Zhou, Ziyue Luo, Nan Ya, Zichen Feng, Yihan Liu, William Gouskov		
            </p>
            <p>
              <strong>Location:</strong> Edinburgh, UK
            </p>
            <p>
              <strong>Website: </strong> <a href="https://2020.igem.org/Team:Edinburgh"> igemedinburgh.org </a>
           
            </p>
         
          </div>
        </div>
    <h4 class="my-3">What is iGEM? </h4>
                        <p class="text-muted"> iGEM (international Genetically Engineered Machine) is a worldwide synthetic biology competition.
Student teams are given a kit (so called ‘Distribution Kit’) of standard, interchangeable parts (so called 'BioBricks') at the beginning of the summer from the Registry of Standard Biological Parts comprising various genetic components such as promoters, terminators, reporter elements, and plasmid backbones. Over the summer, students use these parts and new parts of their own design to build biological systems and operate them in living cells.</p>

         <h4 class="my-3">What we did? </h4>
                        <p class="text-muted"> I had the pleasure to join a fantastic team represing The University of Edinburgh in the competition. We developed "Finding Nemo", a transcription-only, cell-free biosensor. Our aim was to apply this biosensor to the testing of water for environmental polutants such as arsenic as well as microbial pathogens. </p>

        
        

       <video width="1186px" height="691px" controls>
  <source src="/img/video/igemvid.mp4" type="video/mp4"/>
   dsv</video>
    
    
      </div>
     
    </Layout>
  );
};


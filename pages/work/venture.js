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
            src="/img/illustrations/edventure.png"
            className="rounded-lg w-1/4 mr-20 mb-4 hidden md:block xl:block xxl:block"
          ></img>

          <div>
            <h1 className="text-5xl font-bold mb-8">EdVenture Capital</h1>
            <p>
              <strong>Status:</strong> In Planning
            </p>
            
            <p>
              <strong>Collaborators:</strong> Zara Zaman, Ragnor Comerford 
          
            </p>
            <p>
              <strong>Location:</strong> Edinburgh, UK
            </p>
            <p>
              <strong>Website: </strong> href="www.edventure.vc" {"www.edventure.vc"}
           
            </p>
         
          </div>
        </div>
        <p>
          EdVenture is a student-run venture fund building and funding startups through a semester-long accelerator programme.
        </p>
        <p>
          The programme is organised into three phases; selection, competition and funding.
        </p>
        <br />
        <p> <strong> 1. Selection:</strong> We recruit the best and the brightest from the University of Edinburgh and allocate students between teams of either internal or external ideas. This means we can include exceptional talent with a passion for building a startup, whether they come to us with their own idea or not. The teams are carefully handpicked by EdVenture to ensure a range of complementary skills and abilities in heterogeneous groups. </p>
        <br />
        <p> <strong> 2. Competition:</strong> This is where it gets even more exciting! The competition phase. In this phase, the teams work for 10 weeks on the execution of their respective projects and present their progress every week to both the EdVenture team and rest of the cohort. Along the way, as they build their startups, our 10-week competition is jam-packed with exciting workshops, personalised mentoring sessions and inspirational guest speakers on a range of pertinent topics for budding startups </p>
        <br />
        <p> <strong> 3. Funding:</strong> In the third phase, which represents the end of the programme, the most promising groups from the competition are selected and offered a unique investment opportunity! </p>
       

       
        
      </div>
    </Layout>
  );
};


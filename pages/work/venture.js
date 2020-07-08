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
              <strong>Status:</strong> planning
            </p>
            
            <p>
              <strong>Collaborators:</strong> 
          
            </p>
            <p>
              <strong>Location:</strong> Edinburgh, UK
            </p>
            <p>
              <strong>Website:</strong>{" "}
           
            </p>
         
          </div>
        </div>
        <p>
          EdVenture Capital is a Edinburgh-based venture capital society  focused on early stage startups founded by students from British universities. 
        </p>
        <p>
          Besides early stage funding,
          we offer network, mentoring and operational guidance to early stage student founders in our accelerator EdVenture Studios.  
        </p>

       

       
        
      </div>
    </Layout>
  );
};

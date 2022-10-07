import Layout from "components/layout";
import { useMediaQuery } from "react-responsive";

const TimelineItem = ({ right, left, image, text }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <div className="flex w-full flex-no-wrap flex-row items-center">
      {isMobile ? null : (
        <div
          className={`${
            left ? "visible" : "invisible"
          } h-56 text-gray-700 rounded-xl shadow-black w-1/2 flex flex-col`}
        >
          <div
            className="h-32"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="h-24 flex items-center px-5">{text}</div>
        </div>
      )}

      <div className="px-10 h-72 relative flex justify-center items-center">
        <div
          className="bg-gray-700 h-full flex justify-center items-center"
          style={{ width: "0.125rem" }}
        ></div>
        <button className="h-2 w-2 bg-gray-700 absolute text-white font-bold rounded-full"></button>
      </div>
      <div
        className={`${
          right ? "visible" : "md:invisible"
        } h-56 text-gray-700 rounded-xl shadow-black w-2/3 md:w-1/2 flex flex-col`}
      >
        <div
          className="h-32"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="h-24 flex items-center px-5">{text}</div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 md:w-3/4 lg:w-3/4 leading-relaxed">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-primary">a</span>bout
        </h1>
        <p>
          Hi! I'm Fynn. I just finished my undergraduate degree in  Neuroscience at
          the University of Edinburgh which equipped me with the tools to explore the potential of biotechnology. I think we are at a stage where we can start thinking about cures instead of treatments and want to dedicate my professional life to the discovery and development of innovative therapies and cures for the world's most devastating diseases. For this reason, I am currently trying to learn everything about the body in health and disease to find out how best to fix it.
        </p>
       
        <p>
          Here, you can see a timeline as a brief overview of what I have done
          in recent years.
        </p>
        <div className="w-full mt-20">

          
             <TimelineItem
          left
          image="/img/illustrations/2020.svg"
          minWidth="auto"
          text={<p>I concluded my degree with <a target="https://edventure.vc/emerge" className="underline">preclinical research</a> of multi-component pharmacotherapies for Multiple Sclerosis</p>} 
        />
             <TimelineItem
          right
          image="/img/illustrations/2020.svg"
          minWidth="auto"
          text={<p>In november 2021, I organized Europe's biggest ever student founder conference, <a target="https://edventure.vc/emerge" className="underline">edventure emerge</a> </p>} 
        />


        <TimelineItem
          right
          image="/img/illustrations/2020.svg"
          minWidth="auto"
          text={<p>In my 3rd year, I started <a target="https://edventure.vc/" className="underline">edventure,  </a> Europe's biggest student-run accelerator.</p>} 
        />
          
<TimelineItem
          left
          image="/img/illustrations/medicalresearch.svg"
          minWidth="auto"
          text={<p>In 2020, I also took part in<a href="/work/igem" className="underline">iGEM</a>.</p>} 
        />

        <TimelineItem
          right
          image="/img/illustrations/empty.svg"
          minWidth="auto"
          maxWidth="auto"
          text={<p>During the pandemic, I started some exciting <a href="/work" className="underline">projects</a>.</p>} 
        />


        <TimelineItem
          left
          image="/img/illustrations/video.svg"
          minWidth="auto"
          text={<p>Meanwhile, I developed a great passion for filmmaking. <a href="/work/films" className="underline"s>Here's</a> what I've done.</p>} 
        />
       
        <TimelineItem
          right
          image="/img/illustrations/doctor.svg"
          text="In 2019 I transferrred to study Neuroscience at the University of Edinburgh."
        />
          <TimelineItem
            left
            image="/img/illustrations/exam.svg"
            minWidth="auto"
            text="In 2018, I started studying Neuroscience at the University of Manchester. 
          />
           <TimelineItem
          right
          image="/img/illustrations/plane.svg"
          minWidth="auto"
          text={<p>Before university, I also travelled through South America and Asia.</p>} 
        />
          <TimelineItem
            left
            image="/img/illustrations/magiousbook.svg"
            minWidth="auto"
            text={<p>I, then,started my first company -<a href="/work/magious" className="underline">Magious.</a></p>}
          />
          <TimelineItem
            right
            image="/img/illustrations/graduate.svg"
            minWidth="auto"
            text="In 2017 I graduated from high school"
          />
        
      </div>
      </div>
    </Layout>
  );
};

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
          My name is Fynn Comerford and I’m currently studying Neuroscience at
          the University of Edinburgh. Professionally, I am particularly interested venture capital, biotech and the development of innovative therapies. I also love venturing out
          into physics and philosophy, I am passionate about filmmaking and
          always up to any sorts of outdoor activity.
        </p>
       
        <p>
          Here, you can see a timeline as a brief overview of what I have done
          in recent years.
        </p>
        <div className="w-full mt-20">
       
        <TimelineItem
          left
          image="/img/illustrations/2020.svg"
          text={<p>Beginning my third year of university, launched EdVenture, Edinburgh's first student-run accelerator programme. We are currently receiving applications to  <a target="https://edventure.vc/" className="underline">join the programme. </a> </p>} 
        />
        <TimelineItem
          right
          image="/img/illustrations/empty.svg"
          text={<p>During the challenging pandemic, I interned in a VC firm, collaborated on two research papers and founded an accelerator. Check out my recent projects <a href="/work" className="underline">here. </a></p>} 
        />


        <TimelineItem
          left
          image="/img/illustrations/video.svg"
          text={<p>Meanwhile, I developed a great passion for filmmaking. You can see some of my clips <a href="/work/films" className="underline"s>here.</a></p>} 
        />
       
        <TimelineItem
          right
          image="/img/illustrations/doctor.svg"
          text="2019 For the second year of my studies, I transferred to the University of Edinburgh."
        />
          <TimelineItem
            left
            image="/img/illustrations/exam.svg"
            text="In 2018, I started my first year of Neuroscience at the University of Edinburgh. I finished the year top of my class with an average of 90,3%."
          />
           <TimelineItem
          right
          image="/img/illustrations/plane.svg"
          text={<p>After wrapping up Magious, I travelled through Europe, Asia and South America. I wrote about some of my experiences in my <a href="/work/blog" className="underline"s>blog.</a></p>} 
        />
          <TimelineItem
            left
            image="/img/illustrations/magiousbook.svg"
            text={<p>2017 Magious: Shortly after graduating, a German publishing company contracted the startup I had founded in highschool. <a href="/work/magious" className="underline">Find out more.</a></p>}
          />
          <TimelineItem
            right
            image="/img/illustrations/graduate.svg"
            text="2017 High school: I graduated as the top student of my year with a 4.0 GPA [1.0 Abitur]."
          />
        
      </div>
      </div>
    </Layout>
  );
};

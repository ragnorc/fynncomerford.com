import Layout from "components/layout";
import { useMediaQuery } from "react-responsive";

const TimelineItem = ({ right, left, image, text }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div class="flex w-full flex-no-wrap flex-row items-center">
      {isMobile ? null : (
        <div
          class={`${
            left ? "visible" : "invisible"
          } h-48 text-gray-700 rounded shadow-black w-1/2 flex flex-col`}
        >
          <div
            className="h-32"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="h-16 flex items-center pl-5">{text}</div>
        </div>
      )}

      <div class="px-10 h-72 relative flex justify-center items-center">
        <div class="bg-gray-700 h-full w-0.5 flex justify-center items-center"></div>
        <button class="h-2 w-2 bg-gray-700 absolute text-white font-bold rounded-full"></button>
      </div>
      <div
        class={`${
          right ? "visible" : "md:invisible"
        } h-48 text-gray-700 rounded shadow-black w-2/3 md:w-1/2 flex flex-col`}
      >
        <div
          className="h-32"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="h-16 flex items-center pl-5">{text}</div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <Layout>
      <div class="pl-18 lg:pl-32 md:w-3/4 lg:w-3/4 leading-relaxed">
        <h1 class="text-5xl font-bold mb-4">
          <span class="text-primary">A</span>bout
        </h1>
        <p>
          My name is Fynn Comerford and I’m currently studying Neuroscience at
          the University of Edinburgh. I am particularly interested in the
          development of stem cell and gene therapies. I also love venturing out
          into physics and philosophy, I am passionate about filmmaking and
          always up to any sorts of outdoor activity.
        </p>
        <p>
          Here, you can see a timeline as a brief overview of what I have done
          in recent years.
        </p>
        <TimelineItem
            left
            image="/img/illustrations/reading.svg"
            text="2019 For the second year of my studies, I transferred to the University of Edinburgh."
          />
        <div class="w-full mt-20">
          <TimelineItem
            left
            image="/img/illustrations/people.svg"
            text="In 2018, I started my first year of Neuroscience at the University of Edinburgh. I finished the year top of my class with an average of 90,3%."
          />
          <TimelineItem
            right
            image="/img/illustrations/reading.svg"
            text="2017 Magious: Shortly after graduating, a German publishing company started contracted my startup I had founded in highschool"
          />
           <TimelineItem
            left
            image="/img/illustrations/reading.svg"
            text="2017 High school: I graduated as the top student of my year with a 4.0 GPA [1.0 Abitur]."
          />
        </div>
      </div>
    </Layout>
  );
};

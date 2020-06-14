import Layout from "components/layout";

const TimelineItem = ({ right, left }) => {
  return (
    <div class="flex w-full flex-no-wrap flex-row items-center">
      <div
        class={`${
          left ? "visible" : "invisible"
        } h-48 text-gray-700 rounded shadow-black w-1/2 flex flex-col`}
      >
        <div
          className="h-32"
          style={{
            backgroundImage: "url('/img/illustrations/people.svg')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div class="px-10 h-72 relative flex justify-center items-center">
        <div class="bg-gray-700 h-full w-0.5 flex justify-center items-center"></div>
        <button class="h-2 w-2 bg-gray-700 absolute text-white font-bold rounded-full"></button>
      </div>
      <div
        class={`${
          right ? "visible" : "md:invisible"
        } h-48 text-gray-700 rounded shadow-black w-1/2 flex flex-col`}
      >
        <div
          className="h-32"
          style={{
            backgroundImage: "url('/img/illustrations/people.svg')",
            backgroundSize: "cover",
          }}
        ></div>
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
          My name is Ragnor Comerford and I’m currently studying Artificial
          Intelligence at the University of Edinburgh with the main research
          interest at the intersection of Artificial Intelligence, Computer
          Science, Neuroscience and Biology.
        </p>
        <p>
          I’m intrigued by languages, philosophy, science and design and
          passionate about the development of global policies and federalism to
          tackle our world’s issues such as poverty and climate change.
        </p>
        <p>
          I love to travel, play the guitar and do all kinds of sports and I am
          constantly seeking to be inspired, to solve the truly important
          problems and to be surrounded by people I love.
        </p>

        <div class="w-full mt-20">
          <TimelineItem left />
          <TimelineItem right />
        </div>
      </div>
    </Layout>
  );
};

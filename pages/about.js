import Layout from "components/layout";

const TimelineItem = ({ right, left, image }) => {
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
            backgroundImage: `url('${image}')`,
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
            backgroundImage: `url('${image}')`,
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

        <div class="w-full mt-20">
          <TimelineItem left image="/img/illustrations/people.svg" />
          <TimelineItem right image="/img/illustrations/reading.svg" />
        </div>
      </div>
    </Layout>
  );
};

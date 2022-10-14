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
              <strong>Period:</strong> 2020 - 2023
            </p>
            <p>
              <strong>Collaborators:</strong>&nbsp;
              <a
                target="_blank"
                className="underline"
                href="https://ragnor.co/"
              >
                Ragnor Comerford,
              </a>
              <a
                target="_blank"
                className="underline"
                href="https://www.zarazaman.com/"
              >
                Zara Zaman,
              </a>
            </p>
            <p>
              <strong>Location:</strong> Edinburgh, Scotland
            </p>

            <a href="https://edventure.vc">
              <img
                className="w-1/6 h-auto mt-5"
                src="/img/illustrations/edventure_logo.svg"
              />
            </a>
          </div>
        </div>
        <p>
          In late 2020, I co-founded edventure, a community of founders, makers,
          builders, and researchers who seek to solve problems, collaborate and
          learn. edventure's mission consists of leveraging entrepreneurship and
          innovation in science to tackle our planet's most pressing issues. We
          take a problem-led approach to building startups and provide a path to
          achieving the United Nations Sustainable Development Goals.
        </p>

        <p className="mt-5">
          edventure was initially conceived as a sector-agnostic accelerator for
          undergraduate students which rapidly evolved to comprise multiple
          accelerators and incubators providing over 250 students with the tools
          they need to start their own ventures. We drew expertise for these
          programs from our amazing speakers which included the likes of Gareth
          Williams (Skyscanner), James Watt (BrewDog), Celine Halioua (Loyal) or
          Nigel Eccles (Flick).
        </p>

        <p>
          As edventure grew, we were comissioned by multiple universities
          (University of Edinburgh, Heriot Watt) and organizations (Edinburgh
          Innovations, Bayes Centre) and even Cancer Research UK to run
          incubators for their network. For Cancer Research UK, we developed
          incubators that helped oncologist and cancer researchers translate to
          their research to therapeutics.kcwkjdbkeqbdkqbjed.{" "}
        </p>
        <div className="flex flex-col items-center w-100 mb-10 rounded-lg">
          <img
            className="mt-5 mb-5 w-1/2"
            src="/img/illustrations/magiouslanding.png"
          ></img>
        </div>

        <div className="flex flex-row flex-wrap justify-center w-100 mt-10 mb-20">
          <div className="flex flex-col items-center justify-center">
            <img
              className="mt-5 mb-5 w-1/2"
              src="/img/illustrations/magiousmagazines.jpg"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="mt-5 mb-5 w-1/2"
              src="/img/illustrations/magiousarticles.jpg"
            />
          </div>
        </div>
       
        <div className="flex flex-col items-center w-100 my-10">
          <img
            className="mt-5 mb-2 w-2/5"
            src="/img/illustrations/magiouspresent.png"
          />
        </div>
      </div>
    </Layout>
  );
};

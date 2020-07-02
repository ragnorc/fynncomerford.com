import Masonry from "react-masonry-css";
import Layout from "components/layout";
import Image from "components/image";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-full leading-relaxed">
        <h1 className="text-5xl font-bold mb-12">
          <span className="text-primary">w</span>ork
        </h1>
        <Masonry
          className="w-auto flex"
          columnClassName="px-5"
          breakpointCols={{
            default: 3,
            1150: 2,
            700: 1,
            400: 1,
          }}
        >
          <Link href="/work/predikon">
            <a>
              <div className="shadow-black rounded-lg bg-gray-100 mb-6">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img className="w-1/5 h-auto " src="/img/illustrations/magiouswork.svg" />
                  <div className="border-l-2 h-10 border-black mx-5 rounded-xl"></div>
                  <h2 className="text-lg">Magious</h2>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/work/hyped">
            <a>
              <div className="shadow-black bg-gray-100 rounded-lg  mb-6">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img className="w-1/5 h-auto" src="/img/illustrations/finance.svg"/>

                  <div className="border-l-2 h-10 border-black mx-5"></div>
                  <h2 className="text-lg">EdVenture Capital</h2>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/work/coursework">
            <a>
              <div className="shadow-black rounded-lg mb-6 bg-gray-100">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img className="w-1/6 h-auto" src="img/illustrations/publication.svg" />

                  <div className="border-l-2 h-10 border-black mx-5"></div>
                  <h2 className="text-lg">Publications
              </h2>
                </div>
              </div>
            </a>
          </Link>
             <Link href="/work/coursework">
            <a>
              <div className="shadow-black rounded-lg mb-6 bg-gray-100">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img className="w-1/6 h-auto" src="img/illustrations/venture.svg" />

                  <div className="border-l-2 h-10 border-black mx-5"></div>
                  <h2 className="text-lg">H2 Ventures
              </h2>
                </div>
              </div>
            </a>
          </Link>   <Link href="/work/films">
            <a>
              <div className="shadow-black rounded-lg mb-6 bg-gray-100">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img className="w-1/6 h-auto" src="img/illustrations/video.svg" />

                  <div className="border-l-2 h-10 border-black mx-5"></div>
                  <h2 className="text-lg">Comerford Filmmaking
              </h2>
                </div>
              </div>
            </a>
          </Link>
            
        </Masonry>
      </div>
    </Layout>
  );
};
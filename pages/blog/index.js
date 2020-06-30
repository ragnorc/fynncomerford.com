import Masonry from "react-masonry-css";
import Layout from "components/layout";
import Link from "next/link";
import { Book, Video, Zap, User } from "react-feather";

const ListItem = ({ href, title, icon, image }) => {
  return (
    <Link as={href} href="/blog/blogpost1">
      <a className="h-112 shadow-black rounded-xl mb-6 flex items-center justify-center relative" style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
            }}>
        <div className="h-32 bg-white absolute bottom-0 mb-4 rounded-xl w-11/12 pt-5 flex flex-col items-center" >
        <p className="text-xl">Reality: A controlled hallucination?</p>
        <p className=" absolute text-gray-500 text-xs bottom-0 right-0 mb-3 mr-4">3 DAYS AGO</p>
        <p className=" absolute text-gray-500 text-xs bottom-0 left-0 mb-3 ml-4">2 MIN READ</p>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <Layout>
      <div className="flex">
        <div className="pl-18 lg:pl-32 w-full leading-relaxed">
          <h1 className="text-5xl font-bold mb-12">
            <span className="text-primary">b</span>log
          </h1>
          <Masonry
            className="w-auto flex"
            columnClassName="px-5"
            breakpointCols={{
              default: 3,
              1000: 3,
              700: 2,
              500: 1,
            }}
          >
            <ListItem
              image="/img/blog/sky.jpeg"
              href=""
            ></ListItem>
            <ListItem
              image="/img/blog/ocean.jpeg"
              href=""
            ></ListItem>
         
          </Masonry>
        </div>
      </div>
    </Layout>
  );
};

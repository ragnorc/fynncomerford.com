import Masonry from "react-masonry-css";
import Layout from "components/layout";
import Link from "next/link";
import { Book, Video, Zap, User } from "react-feather";

const ListItem = ({ href, title, icon, image, readTime, created, category }) => {
  return (
    <Link as={href} href={href}>
      <a className="h-112 shadow-black rounded-xl mb-6 flex items-center justify-center relative" style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
            }}>
        <div className="h-32 bg-white absolute bottom-0 mb-4 rounded-xl w-11/12 pt-5 flex flex-col items-center" >
        <p className="text-xl ml-5">{title}</p>
        <p className=" absolute text-gray-500 text-xs bottom-0 right-0 mb-3 mr-4">{created}</p>
        <p className=" absolute text-gray-500 text-xs bottom-0 left-0 mb-3 ml-4">{readTime} MIN 
        READ</p>
        <div id="demobox">
        <p className="absolute text-gray-500 text-xs bottom-0 right-16  mb-3 ml-2">{category}</p>
        </div>
        </div>
      </a>
    </Link>
    
  );
};

export default () => {
  return (
    <Layout>
      
     <div id="retainable-rss-embed" 
data-rss="https://medium.com/feed/@fynncomerford"
data-maxcols="2" 
data-layout="grid" 
data-poststyle="inline" 
data-readmore="Read the rest" 
data-buttonclass="btn btn-primary" 
data-offset="-100"></div>
<script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
    </Layout>
  );
};

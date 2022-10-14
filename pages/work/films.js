import Image from "components/image";
import Layout from "components/layout";
import ReactPlayer from 'react-player/lazy'
import Masonry from "react-masonry-css";
const Video = ({ url }) => {
    return (
        <div className="h-64 mb-10">
        <ReactPlayer
       
        className='rounded-xl overflow-hidden shadow-black'
        url={url}
        width='100%'
        height='100%'
      />
      </div>
    );
  };
  
  export default () => {
    return (
      <Layout>
        <div className="flex">
          <div className="pl-18 lg:pl-32 w-full leading-relaxed">
            <h1 className="text-5xl font-bold mb-12">
              <span className="text-primary">a</span>mygdala studios
            </h1>
            <p>
            More soon...
            </p>
            <br /> 
            <br /> 
            <Masonry
              className="w-auto flex space-x-10"
              breakpointCols={{
                default: 3,
                1000: 2,
                500: 1,
              }}
            >
            <Video
                url="https://youtu.be/mM4QAp9e4qE"
              ></Video>
            <Video
                url="https://www.youtube.com/watch?v=YDIzb3pkfeI"
              ></Video>
            <Video
                url="https://www.youtube.com/watch?v=DHza57aBlfc"
              ></Video>
              <Video
                url="https://www.youtube.com/watch?v=G-iAie1G5i0"
              ></Video>
            <Video
                url="https://www.youtube.com/watch?v=iadD6jeg5bc"
              ></Video>
               <Video
                url="https://www.youtube.com/watch?v=M3mLX8dsBRE"
              ></Video>
                 <Video
                url="https://www.youtube.com/watch?v=0XArQ714IH0"
              ></Video>
                 <Video
                url="https://www.youtube.com/watch?v=UEFDiW2HSVQ"
              ></Video>
                
            </Masonry>
          </div>
         
        </div>
      </Layout>
    );
  };

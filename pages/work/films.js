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
              <span className="text-primary">c</span>omerford films
            </h1>
            <p>
            Filmmaking is something I can't stop thinking about, something that is always on my mind, when I see beautiful landscapes, when I sit in the bus driving past thousands of individual stories crossing over on the sidewalk or when my mind constructs ideas for my next short-films. Whether it is making short travel videos or more abstract concepts, I love learning about this fantastic artistic medium, about lighting, composition and storytelling. It is my dramatic, artistic self that keeps my scientific, rational side in balance. Although I largely do it for its own sake and my personal enjoyment, here are some of the last clips I have been working on. 
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
                <a data-pin-do="embedUser" data-pin-lang="de" data-pin-board-width="400" 
                data-pin-board-height="300"
                data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.de/fynncomerford"></a>
           
            </Masonry>
          </div>
         
        </div>
        
  
      <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
      </Layout>
    );
  };

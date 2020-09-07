import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-2/1 leading-relaxed">
        <h2>Online courses</h2>
        <ul>
          <li>
            <a target="_blank" className="">

              <span class=""> The Science of Wellbeing, </span>
              Yale
          <br />
            </a>
          </li>
          <li>
            <a target="_blank" className="">

              <span class=""> Python for Science, </span>
              Harvardx
          <br />
            </a>
          </li>

        </ul>
        <br />
        <h2>Artists</h2>
        <ul>
          <li>
            <a target="_blank" className="">
              <span class="">Véronique Ziminski</span>
              </a>
          </li>
        </ul>
          <br />
          <h2>Poems</h2>
          <ul>
            <li>
              Desiderata </li>
            <li>  Do Not Go Gentle </li>
            <li> Do Not Stand By My Grave And Weep </li>
          </ul>
          <h2>Wine</h2>
          
           <h2>Places</h2>
           <ul>
            <li>
              Haute-Savoie, France </li>
            <li>  Cinque Terre, Italy </li>
            <li> Uyuni, Bolivia </li>
            <li> Laguna Colorada, Bolivia </li>
            <li> Si Phangnga National Park, Thailand </li>
            <li> San Pedro de Atacama, Chile </li>
            <li> Cachi, Argentina </li>
            <li> Laguna Colorada, Bolivia </li>
            <li> Ilha do Mel, Brazil </li>
            <li> Par naturel du Verdon, France </li> 
            <li> Lago di Como, Italy </li> 
            <li> Edinburgh, Scotland </li>
            <li> Isle of Skye, Scotland </li> 
          </ul>


          
      </div>
    
    </Layout>
      );
    };

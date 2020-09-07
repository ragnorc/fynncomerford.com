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
      </div>
    
    </Layout>
      );
    };

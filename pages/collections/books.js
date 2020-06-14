import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div class="pl-18 lg:pl-32 w-2/3 leading-relaxed">
        <h1 class="text-5xl font-bold mb-5">
          <span class="text-primary">B</span>
          ooks
        </h1>

        <a target="_blank" class="underline">
          Buch 1
          <br />
        </a>
        <a target="_blank" class="underline">
          Buch 2
          <br />
        </a>
      </div>
    </Layout>
  );
};

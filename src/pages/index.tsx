import Layout from "../Layout";
import { About, Banner } from "../Widgets";

const Home = () => {
  return (
    <Layout title="Christian Quispe">
      <Banner />
      <About />
    </Layout>
  );
};

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/home/${locale}.json`),
      },
      now: new Date().getTime(),
    },
  }
}

export default Home;

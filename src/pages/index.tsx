import Layout from "../Layout";
import { About, Banner, Contact, WhatIDo } from "../Widgets";

const Home = () => {
  return (
    <Layout title="Christian Quispe">
      <Banner />
      <About />
      <WhatIDo />
      <Contact />
    </Layout>
  );
};

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/home/${locale}.json`),
        ...require(`../messages/shared/${locale}.json`),
      },
      now: new Date().getTime(),
    },
  };
}

export default Home;

import HomePage from "@/components/HomePage";
import Layout from "@/components/Layout";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Priyangsu Banik</title>
        <meta name="description" content="Welcome to my Portfolio" />
        <meta
          name="keywords"
          content="Next.js developer, React developer, Typescript, JavaScript"
        />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default index;

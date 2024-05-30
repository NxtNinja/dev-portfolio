import HomePage from "@/components/HomePage";
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
      <HomePage />
    </>
  );
};

export default index;

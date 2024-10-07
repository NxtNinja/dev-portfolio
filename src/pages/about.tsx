import About from "@/components/About";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Welcome to my Portfolio" />
        <meta
          name="keywords"
          content="Next.js developer, React developer, Typescript, JavaScript"
        />
      </Head>
      <About />
    </>
  );
};

export default about;

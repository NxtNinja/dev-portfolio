import Services from "@/components/Services";
import Head from "next/head";

const services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Welcome to my Portfolio" />
        <meta
          name="keywords"
          content="Next.js developer, React developer, Typescript, JavaScript"
        />
      </Head>
      <Services />
    </>
  );
};

export default services;

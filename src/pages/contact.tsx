import Contact from "@/components/Contact";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Welcome to my Portfolio" />
        <meta
          name="keywords"
          content="Next.js developer, React developer, Typescript, JavaScript"
        />
      </Head>
      <Contact />
    </>
  );
};

export default contact;

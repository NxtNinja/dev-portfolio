import DisplayExperience from "@/components/Experience/DisplayExperience";
import Head from "next/head";

const experience = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta name="description" content="Welcome to my Portfolio" />
        <meta
          name="keywords"
          content="Next.js developer, React developer, Typescript, JavaScript"
        />
      </Head>
      <DisplayExperience />
    </>
  );
};

export default experience;

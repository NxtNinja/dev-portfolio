import DisplaySkills from "@/components/SkillsSection/DisplaySkills";
import Head from "next/head";

const skills = () => {
  return (
    <>
      <Head>
        <title>Skills</title>
        <meta name="description" content="Welcome to my Portfolio" />
        <meta
          name="keywords"
          content="Next.js developer, React developer, Typescript, JavaScript"
        />
      </Head>
      <DisplaySkills />
    </>
  );
};

export default skills;

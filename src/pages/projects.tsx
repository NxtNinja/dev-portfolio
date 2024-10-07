import DisplayProjects from "@/components/projects/DisplayProjects";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Welcome to my Portfolio" />
        <meta
          name="keywords"
          content="Next.js developer, React developer, Typescript, JavaScript"
        />
      </Head>
      <DisplayProjects />
    </>
  );
};

export default projects;

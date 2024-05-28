import { Tab, Tabs } from "@nextui-org/tabs";
import projects from "@/utils/projects.json";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const DisplayProjects = () => {
  return (
    <>
      <div className="grid place-items-center p-5 w-full h-full md:h-[80dvh] space-y-8">
        <div className="space-y-7 md:w-2/3 lg:w-1/2 mx-auto flex md:mt-10 flex-col items-center h-[450px]">
          <p className="text-3xl font-bold">My Projects</p>

          <Tabs
            aria-label="Options"
            size="lg"
            className="text-center"
            radius="sm"
            color="default"
          >
            <Tab
              key="fullstack"
              title="Full-Stack Apps"
              className="grid md:grid-cols-2 gap-3"
            >
              {projects["fullstack-projects"].map((item, index) => (
                <div
                  key={index}
                  className="border w-full flex flex-col gap-3 p-4 rounded-md bg-foreground text-background"
                >
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">{item.name}</p>
                  </div>
                  <p className="text-sm">{item.technologies}</p>
                  <Link
                    target="_blank"
                    href={item.github}
                    className="flex items-center mt-auto gap-2"
                  >
                    <p className="">Visit on Github:</p>
                    <SquareArrowOutUpRight />
                  </Link>
                </div>
              ))}
            </Tab>
            <Tab
              key="apifetch"
              title="API fethch Apps"
              className="grid md:grid-cols-2 gap-3"
            >
              {projects["api-projects"].map((item, index) => (
                <div
                  key={index}
                  className="border w-full flex flex-col gap-3 p-4 rounded-md bg-foreground text-background"
                >
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">{item.name}</p>
                  </div>
                  <p className="text-sm">{item.technologies}</p>
                  <div className="flex flex-col md:flex-row md:justify-between mt-auto">
                    <Link
                      target="_blank"
                      href={item.github}
                      className="flex items-center mt-auto gap-2"
                    >
                      <p className="">Visit on Github:</p>
                      <SquareArrowOutUpRight />
                    </Link>
                    <Link
                      target="_blank"
                      href={item["live-link"]}
                      className="flex items-center mt-auto gap-2"
                    >
                      <p className="">Visit site:</p>
                      <SquareArrowOutUpRight />
                    </Link>
                  </div>
                </div>
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DisplayProjects;

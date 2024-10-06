import skills from "@/utils/skills.json";
import { Image } from "@nextui-org/image";
import { Tab, Tabs } from "@nextui-org/tabs";

const DisplaySkills = () => {
  return (
    <>
      <div className="grid place-items-center p-5 w-full h-full md:h-[80dvh] space-y-8">
        <div className="space-y-7 md:w-2/3 lg:w-1/2 mx-auto flex md:mt-10 flex-col items-center h-[450px]">
          <p className="text-3xl font-bold">My Skills</p>

          <Tabs
            aria-label="Options"
            size="lg"
            className="text-center"
            radius="sm"
            color="default"
          >
            <Tab
              key="fullstack"
              title="Frontend"
              className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7 place-items-center w-full md:w-[80%]"
            >
              {skills["frontend"].map((item, index) => (
                <div className="flex flex-col gap-3 justify-center items-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={100}
                    height={100}
                    key={item.id}
                    className="p-4 bg-white"
                    radius="full"
                  />
                  <p className="">{item.name}</p>
                </div>
              ))}
            </Tab>
            <Tab
              key="apifetch"
              title="Backend"
              className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7 place-items-center w-full md:w-[80%]"
            >
              {skills["backend"].map((item, index) => (
                <div className="flex flex-col gap-3 justify-center items-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={100}
                    height={100}
                    key={item.id}
                    className="p-4 bg-white"
                    radius="full"
                  />
                  <p className="text-center">{item.name}</p>
                </div>
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DisplaySkills;

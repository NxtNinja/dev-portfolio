import { LaptopMinimal, MonitorCheck, Server, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      name: "Frontend Development",
      icon: <LaptopMinimal />,
      desc: "I can create fast, responsive, and interactive user interfaces from Figma designs. Utilizing the latest technologies, I ensure a seamless user experience.",
    },
    {
      name: "Backend Development",
      icon: <Server />,
      desc: "I develop robust, scalable, and maintainable backend systems. My solutions are built with cutting-edge tools and techniques.",
    },
    {
      name: "Mobile Development",
      icon: <Smartphone />,
      desc: "I design and develop high-performance mobile applications. My focus is on creating engaging and intuitive user experiences.",
    },
    {
      name: "Deployment and Hosting",
      icon: <MonitorCheck />,
      desc: "I ensure efficient deployment and reliable hosting for your applications. Your users will enjoy a seamless and uninterrupted experience.",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5 w-full h-full md:h-[80dvh] space-y-8">
        <div className="space-y-7 md:w-3/4 lg:w-1/2 mx-auto flex md:mt-10 flex-col items-center h-[450px]">
          <p className="text-3xl font-bold">My Services</p>
          <div className="grid md:grid-cols-2 gap-3 w-full">
            {services.map((item, index) => (
              <div
                key={index}
                className="p-4 w-full rounded-md bg-foreground text-background flex flex-col gap-3 border-foreground border-2"
              >
                <div className="flex items-center gap-2">
                  <div className="p-3 border-2 border-background border-dashed rounded-full">
                    {item.icon}
                  </div>
                  <p className="text-xl font-bold">{item.name}</p>
                </div>
                <p className="">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

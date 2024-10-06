import { CornerDownRight, SquareArrowOutUpRight } from "lucide-react";
import { experience } from "../../utils/experience.json";
import Link from "next/link";

const DisplayExperience = () => {
  return (
    <>
      <div className="grid place-items-center p-5 w-full h-full md:h-[80dvh] space-y-8">
        <div className="space-y-7 w-full md:w-2/3 lg:w-1/2 mx-auto flex md:mt-10 flex-col items-center h-[450px]">
          <p className="text-3xl font-bold">My Experience</p>
          <div className="flex w-full md:w-[80%]">
            {experience.map((item, index) => (
              <div className="w-full flex flex-col gap-3 p-4 rounded-md border bg-foreground text-background">
                <div className="flex justify-between">
                  <p className="text-2xl font-bold">{item.designation}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CornerDownRight />
                  <div className="flex items-center gap-2">
                    <Link href={item.link} target="_blank">
                      {item.name}
                    </Link>
                    <SquareArrowOutUpRight />
                  </div>
                </div>
                <p className="">
                  {item.start_date} - {item.end_date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayExperience;

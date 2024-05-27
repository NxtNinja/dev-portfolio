import { ThemeAtom } from "@/utils/ThemeAtom";
import { useAtom } from "jotai/react";
import DownloadResumeBtn from "./buttons/DownloadResumeBtn";
import Image from "next/image";

const HomePage = () => {
  const [theme] = useAtom(ThemeAtom);

  return (
    <>
      <div className="flex flex-col">
        <div className="md:w-1/2 mx-auto text-center space-y-3 flex flex-col justify-center items-center">
          <Image
            src="/homepage.jpg"
            alt="Home Image"
            width={300}
            height={300}
            className={`${theme ? "invert xl:w-[50%]" : "xl:w-[50%]"}`}
          />
          <div className="">
            <p className="sm:text-xl text-lg lg:text-lg">Hello, I'm</p>
            <p className="sm:text-5xl text-3xl lg:text-3xl font-bold">
              Priyangsu Banik
            </p>
          </div>
          <p className="">
            I am an Enginnering Student, pursuing B.Tech in Computer Science and
            Engineering at Dr. Sudhir Chandra Sur Institute of Technology and
            Sports Complex
          </p>
          <DownloadResumeBtn />
        </div>
      </div>
    </>
  );
};

export default HomePage;

import DownloadResumeBtn from "./buttons/DownloadResumeBtn";
import { Typewriter } from "react-simple-typewriter";
import { Image } from "@nextui-org/image";
const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-[80dvh] justify-center items-center">
        <div className="md:w-1/2 mx-auto text-center space-y-3 flex flex-col justify-center items-center">
          {/*  */}

          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              className="border-4 rounded-full p-1 shadow-lg bg-gradient-to-r from-slate-500 via-slate-500 to-slate-500"
              src="/priyangsu.avif"
              alt="profile"
              width={200}
              height={200}
            />
            <div className="">
              <p className="sm:text-xl text-lg lg:text-lg">Hello, I'm</p>
              <p className="sm:text-5xl text-3xl lg:text-3xl font-bold">
                Priyangsu Banik
              </p>
            </div>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold tracking-widest">
              <Typewriter
                words={[
                  "<Frontend Developer/>",
                  "<Backend Developer/>",
                  "<Mobile Developer/>",
                  "<Cloud Developer/>",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          <p className="p-4">
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

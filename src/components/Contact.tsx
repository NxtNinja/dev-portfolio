import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const socials = [
    { icon: <FaGithub size={30} />, link: "https://github.com/NxtNinja" },
    {
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/priyangsu-banik-757065279/",
    },
  ];
  return (
    <>
      <div className="grid place-items-center p-5 w-full h-[80dvh] space-y-8">
        <div className="space-y-7 md:w-2/3 lg:w-1/3 mx-auto flex md:mt-10 flex-col items-center">
          <div className="space-y-4 text-center">
            <p className="text-3xl font-bold">Contact me</p>
            <p className="text-xl">Want to hire me? Let's get connected.</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg font-bold">
            <p className="">My Gmail: </p>
            <Link
              target="_blank"
              href={"mailto:priyangsubanik2003@gmail.com"}
              className="text-blue-500 font-normal"
            >
              priyangsubanik2003@gamil.com
            </Link>
          </div>
          <Divider />
          <div className="flex justify-center items-center gap-4">
            <p className="font-bold text-xl">My Socials: </p>
            <div className="flex justify-center items-center gap-5">
              {socials.map((item, index) => (
                <Link target="_blank" href={item.link}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

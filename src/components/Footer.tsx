import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full p-3 lg:px-12 flex justify-between items-center h-full">
        <p className="font-bold">
          @{new Date().getFullYear()}.All rights reserved
        </p>
        <div className="flex items-center gap-3 font-bold">
          <Link target="_blank" href={"https://github.com/NxtNinja"}>
            <Github />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/priyangsu-banik-757065279/"}
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

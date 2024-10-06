import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
} from "@nextui-org/navbar";
import { Tooltip } from "@nextui-org/tooltip";
import {
  AtSign,
  CodeXml,
  Home,
  Lightbulb,
  Settings,
  SquareKanban,
  User,
} from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import SwitchTheme from "./SwitchTheme";
import { Raleway } from "next/font/google";
import Footer from "./Footer";

const raleway = Raleway({ subsets: ["latin"], weight: "400" });

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menu = [
    { icon: <Home />, path: "/", name: "Home" },
    { icon: <User />, path: "/about", name: "About" },
    { icon: <Settings />, path: "/skills", name: "Skills" },
    { icon: <SquareKanban />, path: "/experience", name: "Experience" },
    { icon: <Lightbulb />, path: "/services", name: "Services" },
    { icon: <CodeXml />, path: "/projects", name: "Projects" },
    { icon: <AtSign />, path: "/contact", name: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`${raleway.className}`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-12 justify-between items-center w-full"
        justify="center"
      >
        {menu.map((items) => (
          <Link key={items.path} href={items.path}>
            <NavbarItem
              className={`${
                router.pathname === items.path && "border-b-2 border-foreground"
              } p-3`}
            >
              <Tooltip showArrow={true} color="foreground" content={items.name}>
                {items.icon}
              </Tooltip>
            </NavbarItem>
          </Link>
        ))}
        <NavbarItem>
          <SwitchTheme />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden">
        <NavbarItem>
          <SwitchTheme />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menu.map((items) => (
          <Link key={items.path} href={items.path} onClick={handleLinkClick}>
            <NavbarItem
              className={`${
                router.pathname === items.path &&
                "bg-foreground text-background rounded-md"
              } p-3 flex items-center gap-2`}
            >
              <p>{items.icon}</p>
              <p>{items.name}</p>
            </NavbarItem>
          </Link>
        ))}
        <NavbarItem>
          <Footer />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

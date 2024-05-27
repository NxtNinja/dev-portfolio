import { ReactNode } from "react";
import Navigation from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="">
        <Navigation />
      </nav>
      <main className="h-[80dvh]">{children}</main>
      <footer className="h-[10dvh] w-full">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

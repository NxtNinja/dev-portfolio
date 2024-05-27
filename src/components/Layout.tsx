import { ReactNode } from "react";
import Navigation from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="">
        <Navigation />
      </nav>
      <main className="">{children}</main>
      <footer className="fixed bottom-0 w-full">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

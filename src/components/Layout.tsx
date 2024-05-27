import { ReactNode } from "react";
import Navigation from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="h-[10dvh]">
        <Navigation />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

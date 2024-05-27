import { ReactNode } from "react";
import Navigation from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="h-[10dvh]">
        <Navigation />
      </nav>
      <main className="h-[80dvh]">{children}</main>
      <footer className="h-[10dvh]">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

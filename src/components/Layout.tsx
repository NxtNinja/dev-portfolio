import { ReactNode } from "react";
import Navigation from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="fixed top-0 w-full">
        <Navigation />
      </nav>
      <main className="mt-10">{children}</main>
      <footer className="hidden md:flex fixed bottom-0 md:h-[10dvh] w-full">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

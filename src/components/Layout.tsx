import { ReactNode } from "react";
import Navigation from "./Nav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;

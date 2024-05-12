import Header from "./Header";
import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-3">
      <Header />
      {children}
    </div>
  );
};

export default Layout;

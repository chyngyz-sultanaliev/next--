import React, { FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import sass from "./LayoutSite.module.scss";
interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className={sass.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;

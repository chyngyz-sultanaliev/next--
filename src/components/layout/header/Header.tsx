import React from "react";
import sass from "./Header.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <header className={sass.header}>
      <div className="container">
        <div className={sass.header_nav}>
          <Link href={"/"}>Home</Link>
          <Link href={"/create"}>Create</Link>
          <Link href={"/product"}>Product</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

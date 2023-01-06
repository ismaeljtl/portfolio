import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
  children: JSX.Element;
}

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-customBlue-900 text-customBlue-800 dark:text-customBlue-100">
      <Header />
      <div className="transition duration-300">
        <div className="min-h-[calc(100vh-64px-68px)]">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import React, { FC } from "react";
import Logo from "./Logo";

const Footer: FC = () => {
  return (
    <footer>
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex justify-between align-middle py-4">
        <Logo />
        <p>Built with 🍺 by Ismael Teixeira</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { FC } from "react";
import IBlock from "../interfaces/block.interface";

const AboutMe: FC<IBlock> = ({ heading, description }) => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2">
        <div className="py-16 px-8 pr-0 pb-6 bg-light-quote dark:bg-dark-quote bg-no-repeat">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            {heading && heading}
          </h1>
        </div>
        <div className="flex items-center px-0 py-0 md:py-8 md:px-12">
          <p className="text-base sm:text-lg">{description && description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

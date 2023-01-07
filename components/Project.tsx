import React, { FC } from "react";
import Link from "next/link";
import IItem from "../interfaces/item.interface";
import ThemedImage from "./ThemedImage";

const Project: FC<IItem> = ({
  url,
  image,
  backgroundImage,
  heading,
  description,
}) => {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
      <Link href={url} target="_blank">
        <ThemedImage lightImage={image} darkImage={backgroundImage} />
      </Link>
      <Link href={url} target="_blank">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mt-6 mb-2 hover:text-customBlue-700 hover:dark:text-customBlue-200">
          {heading}
        </h1>
      </Link>
      <p className="text-base sm:text-lg">{description}</p>
    </div>
  );
};

export default Project;

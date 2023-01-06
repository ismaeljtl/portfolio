import Image from "next/image";
import React, { FC } from "react";
import IBlock from "../interfaces/block.interface";
import Button from "./Button";

const CTA: FC<IBlock> = ({ heading, linksCollection, image }) => {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-[80%_20%] sm:grid-cols-[50%_50%] md:grid-cols-[30%_70%] gap-0">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            {heading && heading}
          </h1>
          {linksCollection.items.map((link) => (
            <Button key={link.sys.id} {...link} />
          ))}
        </div>
        <div className="relative pb-[30%]">
          {image && (
            <Image
              src={image.url}
              alt="CTA image"
              className="absolute w-full h-full object-cover object-left"
              width={1412}
              height={356}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;

import React, { FC, useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Button from "./Button";
import Divider from "./Divider";
import Github from "./SocialMedia/Github";
import Linkedin from "./SocialMedia/Linkedin";
import Instagram from "./SocialMedia/Instagram";
import Twitter from "./SocialMedia/Twitter";
import IBlock from "../interfaces/block.interface";
import IItem from "../interfaces/item.interface";

const Hero: FC<IBlock> = ({
  heading,
  description,
  linksCollection,
  image,
  backgroundImage,
  itemsCollection,
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-between">
        <div>
          <Divider />
          <div className="my-16">
            <h1 className="font-bold text-5xl sm:text-7xl md:text-8xl text-customBlue-800 dark:text-customBlue-100">
              {heading}
            </h1>
            <p className="text-base sm:text-lg mb-8">{description}</p>
            {linksCollection.items.map((link) => (
              <Button key={link.sys.id} {...link} />
            ))}
          </div>

          {itemsCollection &&
            itemsCollection.items.map((item: IItem) => (
              <Fragment key={item.sys.id}>
                {item.heading === "github" && <Github {...item} />}
                {item.heading === "linkedin" && <Linkedin {...item} />}
                {item.heading === "instagram" && <Instagram {...item} />}
                {item.heading === "twitter" && <Twitter {...item} />}
              </Fragment>
            ))}
        </div>

        <div className="hidden lg:block">
          {image && backgroundImage && (!mounted || theme === "light") ? (
            <Image
              src={image.url}
              alt={image.description}
              width={image.width}
              height={image.height}
              priority
            />
          ) : (
            <Image
              src={backgroundImage.url}
              alt={image.description}
              width={image.width}
              height={image.height}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

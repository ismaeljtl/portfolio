import React, { FC } from "react";
import Link from "next/link";

interface ISocialIcon {
  url: string;
  external: boolean;
  brand: string;
}

const SocialIcon: FC<ISocialIcon> = ({ url, external, brand }) => {
  return (
    <Link
      href={url}
      target={external ? "_blank" : ""}
      aria-label={`${brand} link`}
    >
      <i
        className={`fa-brands fa-${brand} mr-8 text-3xl sm:text-4xl text-customBlue-800 dark:text-customBlue-100 hover:text-customBlue-700 hover:dark:text-customBlue-200`}
      ></i>
    </Link>
  );
};

export default SocialIcon;

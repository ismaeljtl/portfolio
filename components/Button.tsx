import Link from "next/link";
import React, { FC } from "react";
import ILink from "../interfaces/link.interface";

const Button: FC<ILink> = ({
  style,
  textOnLink,
  description,
  url,
  external,
}) => {
  return style === "fill" ? (
    <Link
      href={url}
      aria-label="button"
      target={external ? "_blank" : ""}
      className="px-4 py-2 mr-8 rounded-md bg-customBlue-800 text-customBlue-50 border-customBlue-800 dark:border-customBlue-50 border-2 dark:bg-customBlue-50 dark:text-customBlue-800 hover:bg-customBlue-700 hover:dark:bg-customBlue-100"
    >
      {textOnLink}
    </Link>
  ) : style === "outline" ? (
    <Link
      href={url}
      aria-label="button"
      target={external ? "_blank" : ""}
      className="px-4 py-2 mr-8 rounded-md bg-customBlue-50 text-customBlue-800 border-customBlue-800 border-2 dark:bg-customBlue-900 dark:text-customBlue-50 dark:border-customBlue-100 hover:bg-customBlue-100 hover:dark:bg-customBlue-800"
    >
      {textOnLink}
    </Link>
  ) : style === "email" ? (
    <Link
      href={`mailto:${url}?&subject=${description}`}
      className="px-4 py-2 mr-8 rounded-md bg-customBlue-800 text-customBlue-50 border-customBlue-800 dark:border-customBlue-50 border-2 dark:bg-customBlue-50 dark:text-customBlue-800 hover:bg-customBlue-700 hover:dark:bg-customBlue-100"
    >
      {textOnLink}
    </Link>
  ) : (
    // default
    <Link href={url} aria-label="link" target={external ? "_blank" : ""}>
      {textOnLink}
    </Link>
  );
};

export default Button;

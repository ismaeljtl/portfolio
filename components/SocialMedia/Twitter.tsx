import React, { FC } from "react";
import Link from "next/link";
import IItem from "../../interfaces/item.interface";

const Twitter: FC<IItem> = ({ url, external }) => {
  return (
    <Link
      href={url}
      target={external ? "_blank" : ""}
      aria-label="twitter link"
    >
      <i className="fa-brands fa-twitter mr-8 text-4xl text-customBlue-800 dark:text-customBlue-100 hover:text-customBlue-700 hover:dark:text-customBlue-200"></i>
    </Link>
  );
};

export default Twitter;

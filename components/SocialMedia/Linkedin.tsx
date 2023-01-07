import React, { FC } from "react";
import Link from "next/link";
import IItem from "../../interfaces/item.interface";

const Linkedin: FC<IItem> = ({ url, external }) => {
  return (
    <Link
      href={url}
      target={external ? "_blank" : ""}
      aria-label="linkedin link"
    >
      <i className="fa-brands fa-linkedin mr-8 text-3xl sm:text-4xl text-customBlue-800 dark:text-customBlue-100 hover:text-customBlue-700 hover:dark:text-customBlue-200"></i>
    </Link>
  );
};

export default Linkedin;

import React, { FC } from "react";

const Divider: FC = () => {
  return (
    <figure className="relative h-8 w-4/6 bg-gradient-to-r from-customBlue-100 to-customBlue-300 dark:from-customBlue-800 dark:to-customBlue-600">
      <svg
        className={`absolute w-8 -right-8 text-customBlue-300 dark:text-customBlue-600`}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H36L0 36V0Z" fill="currentColor" />
      </svg>
    </figure>
  );
};

export default Divider;

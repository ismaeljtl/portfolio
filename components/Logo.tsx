import React, { FC } from "react";
import { useTheme } from "next-themes";

const Logo: FC = () => {
  return (
    <div className="text-customBlue-700 dark:text-customBlue-100">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="9.77734"
          y="6.51562"
          width="6.51546"
          height="22.967"
          fill="currentColor"
        />
        <rect
          x="19.7578"
          y="6.51562"
          width="6.51546"
          height="18.9763"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.9997 1.5736e-06L3.13754 1.37146e-07L-2.848e-07 6.51546L32.8622 6.51546L35.9997 1.5736e-06Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.9997 29.4819L3.13755 29.4819L-2.848e-07 35.9974L32.8621 35.9974L35.9997 29.4819Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Logo;

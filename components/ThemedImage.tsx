import { useTheme } from "next-themes";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import IImage from "../interfaces/image.interface";

const ThemedImage: FC<{ lightImage: IImage; darkImage: IImage }> = ({
  lightImage,
  darkImage,
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let srcImage: IImage;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  switch (resolvedTheme) {
    case "light":
      srcImage = lightImage;
      break;
    case "dark":
      srcImage = darkImage;
      break;
    default:
      srcImage = lightImage;
      break;
  }

  return (
    <Image
      className="rounded-md"
      src={srcImage.url}
      width={srcImage.width}
      height={srcImage.height}
      alt={srcImage.description}
    />
  );
};

export default ThemedImage;

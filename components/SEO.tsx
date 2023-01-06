import Head from "next/head";
import React from "react";
import IImage from "../interfaces/image.interface";

interface ISeo {
  title: string;
  description: string | null;
  pagePath: string;
  ogType: string;
  image: IImage | null;
}

const Seo: React.FC<ISeo> = ({
  title,
  description,
  pagePath,
  ogType,
  image,
}) => {
  const constants = {
    siteName: "Ismael Teixeira",
    siteUrl: "https://www.ismaeljtl.com",
    siteLogo: "https://example.com/images/logo.png",
    siteLogoSquare: "https://example.com/images/logox200.png",
    email: "hey@ismaeljtl.com",
    twitter: "https://twitter.com/ismaeljtl",
    twitterHandle: "@ismaeljtl",
    instagram: "https://www.instagram.com/ismaeljtl",
    linkedin: "https://www.linkedin.com/in/ismaeljtl/",
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description && <meta name="description" content={description} />}
      {/* twitter metadata */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={constants.twitterHandle} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
      {/* canonical link */}
      <link rel="canonical" href={constants.siteUrl + pagePath} />
      {/* open graph metadata */}
      <meta property="og:locale" content="en_UK" />
      <meta property="og:site_name" content={constants.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && (
        <>
          <meta property="og:image" content={image.url} />
          <meta property="og:image:width" content={image.width.toString()} />
          <meta property="og:image:height" content={image.height.toString()} />
        </>
      )}
      <meta property="og:url" content={constants.siteUrl + pagePath} />
    </Head>
  );
};

export default Seo;

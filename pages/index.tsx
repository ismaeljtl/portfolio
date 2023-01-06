import React from "react";
import { GetStaticProps } from "next";
import contentful from "../services/contentful";
import HOMEPAGE from "../queries/homepage.query";
import IBlock from "../interfaces/block.interface";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import CTA from "../components/CTA";
import GridProjects from "../components/GridProjects";
import Seo from "../components/SEO";
import IImage from "../interfaces/image.interface";

interface IHomePage {
  pageData: {
    url: String;
    heroBlock: IBlock;
    aboutMe: IBlock;
    projects: IBlock;
    cta: IBlock;
    seo: { title: string; description: string; image: IImage };
  };
}

const Home: React.FC<{ pageData: any }> = ({ pageData }) => {
  const seo = {
    title: pageData.seo.title,
    description: pageData.seo.description,
    image: pageData.seo.image,
    pagePath: pageData.url,
    ogType: "Website",
  };
  return (
    <div>
      <Seo {...seo} />
      <Hero {...pageData.heroBlock} />
      <AboutMe {...pageData.aboutMe} />
      <GridProjects {...pageData.projects} />
      <CTA {...pageData.cta} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<IHomePage> = async ({ locale }) => {
  const res = await contentful.query({
    query: HOMEPAGE,
  });

  const pageData = res.data.landingPage;

  return { props: { pageData } };
};

export default Home;

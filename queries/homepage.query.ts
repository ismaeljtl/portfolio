import { gql } from "@apollo/client";
import blockFragment from "./fragments/block.fragment";
import mediaFragment from "./fragments/media.fragment";

const HOMEPAGE = gql`
  ${blockFragment}
  ${mediaFragment}
  query Headline {
    landingPage(id: "5UpHwbuTkAGOarEA7b5TCK") {
      seo {
        title
        description
        image {
          ...mediaFragment
        }
      }
      heroBlock {
        ...blockFragment
      }
      aboutMe {
        ...blockFragment
      }
      projects {
        ...blockFragment
      }
      cta {
        ...blockFragment
      }
    }
  }
`;

export default HOMEPAGE;

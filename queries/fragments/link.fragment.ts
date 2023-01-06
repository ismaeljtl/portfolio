import { gql } from "@apollo/client";
import mediaFragment from "./media.fragment";

const linkFragment = gql`
  ${mediaFragment}
  fragment linkFragment on Link {
    sys {
      id
    }
    textOnLink
    description
    icon {
      ...mediaFragment
    }
    url
    external
    style
  }
`;

export default linkFragment;

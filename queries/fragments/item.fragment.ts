import { gql } from "@apollo/client";
import mediaFragment from "./media.fragment";

const itemFragment = gql`
  ${mediaFragment}
  fragment itemFragment on Item {
    sys {
      id
    }
    heading
    subheading
    description
    image {
      ...mediaFragment
    }
    backgroundImage {
      ...mediaFragment
    }
    url
    textOnLink
    external
  }
`;
export default itemFragment;

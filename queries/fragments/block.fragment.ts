import { gql } from "@apollo/client";
import itemFragment from "./item.fragment";
import linkFragment from "./link.fragment";
import mediaFragment from "./media.fragment";

const block = gql`
  ${mediaFragment}
  ${linkFragment}
  ${itemFragment}
  fragment blockFragment on Block {
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
    theme
    linksCollection(limit: 6) {
      items {
        ...linkFragment
      }
    }
    itemsCollection(limit: 16) {
      items {
        ...itemFragment
      }
    }
  }
`;

export default block;

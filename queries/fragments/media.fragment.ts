import { gql } from "@apollo/client";

const mediaFragment = gql`
  fragment mediaFragment on Asset {
    url
    description
    height
    width
  }
`;

export default mediaFragment;

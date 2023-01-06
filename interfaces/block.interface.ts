import IImage from "./image.interface";
import IItem from "./item.interface";
import ILink from "./link.interface";

export default interface IBlock {
  sys: { id: string };
  heading: string | null;
  subheading: string | null;
  description: string | null;
  image: IImage | null;
  backgroundImage: IImage | null;
  theme: string | null;
  linksCollection: { items: ILink[] };
  itemsCollection: { items: IItem[] };
}

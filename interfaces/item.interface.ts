import IImage from "./image.interface";

export default interface IItem {
  sys: { id: string };
  heading: string | null;
  subheading: string | null;
  description: string | null;
  image: IImage | null;
  backgroundImage: IImage | null;
  url: string | null;
  linkText: string | null;
  external: boolean | null;
}

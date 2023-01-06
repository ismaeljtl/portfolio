import IImage from "./image.interface";

export default interface ILink {
  sys: { id: string };
  textOnLink: string;
  description: string | null;
  icon: IImage | null;
  url: string;
  external: boolean;
  style: string | null;
}

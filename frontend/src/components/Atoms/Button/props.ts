export default interface ButtonProps {
  title: string;
  link?: boolean;
  href?: string;
  background?: boolean;
  type?: "submit" | "button";
  onClick?: (e:any) => void;
  bgColor?:"#fb8233" | "black" |"white"
  color?:"white" | "black"
}
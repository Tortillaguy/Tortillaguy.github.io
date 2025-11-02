import type { CSSProperties } from "react";

export interface Project {
  name?: string;
  filename: string;
  link: string;
  role?: string;
  dates?: string;
  tags?: string[];
  imageStyle?: CSSProperties;
  postID?: string;
}

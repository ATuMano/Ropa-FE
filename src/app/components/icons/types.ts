import { Theme } from "styles/types";
import React from "react";

export interface IconPropsWithOutTheme {
  name?: string;
  style?: Object;
  alt?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  width?: number;
  height?: number;
  className?: string;
  tooltip?: string;
  color?: string;
  hovered?: string;
  index?: number;
}

export interface IconProps extends IconPropsWithOutTheme {
  theme: Theme;
}

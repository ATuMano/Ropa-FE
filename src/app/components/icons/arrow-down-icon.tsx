import React from "react";
import { withTheme } from "styled-components";
import { IconProps } from "./types";

const ArrowDownIcon = ({ theme, ...props }: IconProps) => (
  <svg
    width={props.width}
    height="12"
    viewBox="0 0 20 12"
    fill={theme.primaryColor}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.217152 2.15189L1.65198 0.717066L9.99999 9.06508L18.348 0.717066L19.7828 2.15189L10.0014 11.9333L0.217152 2.15189Z"
    />
  </svg>
);

export default withTheme(ArrowDownIcon);

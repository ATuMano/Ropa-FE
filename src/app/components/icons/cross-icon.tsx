import React from "react";
import { withTheme } from "styled-components";
import { IconProps } from "./types";

const CrossIcon = ({ theme }: IconProps) => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.82843 7.77596L4 4.94753L1.17157 7.77596L0.22405 6.82843L3.05248 4.00001L0.22405 1.17158L1.17157 0.224057L4 3.05248L6.82843 0.224057L7.77595 1.17158L4.94752 4.00001L7.77595 6.82843L6.82843 7.77596Z"
      fill={theme.primaryColor}
    />
  </svg>
);

export default withTheme(CrossIcon);

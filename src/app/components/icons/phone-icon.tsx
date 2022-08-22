import React from "react";
import { withTheme } from "styled-components";
import { IconProps } from "./types";

const PhoneIcon = ({ theme }: IconProps) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.41 5.19C3.37614 7.07795 4.91206 8.61386 6.8 9.58L8.27 8.11C8.46816 7.92795 8.757 7.88442 9 8C9.76807 8.25245 10.5715 8.38073 11.38 8.38C11.712 8.40397 11.976 8.66802 12 9V11.33C12 11.7 11.7 12 11.33 12C5.07261 12 0 6.92739 0 0.67C0 0.299969 0.299969 0 0.67 0H3C3.37003 0 3.67 0.299969 3.67 0.67C3.65787 1.45912 3.76921 2.24528 4 3C4.07587 3.2406 4.01017 3.50341 3.83 3.68L2.41 5.19Z"
      fill={theme.primaryColor}
    />
  </svg>
);

export default withTheme(PhoneIcon);

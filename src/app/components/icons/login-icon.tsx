import React from "react";
import { withTheme } from "styled-components";
import { IconProps } from "./types";

const LoginIcon = ({ theme }: IconProps) => (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 32 32"
  >
    <circle
      cx="16"
      cy="16"
      r="14"
      fill="none"
      stroke={theme.secondaryColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
    <circle
      cx="16"
      cy="13"
      r="5"
      fill="none"
      stroke={theme.secondaryColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
    <path
      d="M5.4,25.1c1.8-4.1,5.8-7,10.6-7c4.8,0,8.9,2.9,10.6,7"
      fill="none"
      stroke={theme.secondaryColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
  </svg>
);

export default withTheme(LoginIcon);

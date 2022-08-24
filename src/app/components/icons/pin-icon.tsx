import React from "react";
import { withTheme } from "styled-components";
import { IconProps } from "./types";

const PinIcon = ({ theme }: IconProps) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.36488 1.36488C2.24126 0.48851 3.43064 -0.0026517 4.67001 1.07682e-05C5.90939 -0.0026517 7.09877 0.48851 7.97514 1.36488C8.85151 2.24126 9.34267 3.43064 9.34001 4.67001C9.34001 8.17001 4.67001 13.34 4.67001 13.34C4.67001 13.34 1.07682e-05 8.17001 1.07682e-05 4.67001C-0.0026517 3.43064 0.48851 2.24126 1.36488 1.36488ZM3.00001 4.67001C3.00001 5.59233 3.7477 6.34001 4.67001 6.34001C5.11292 6.34001 5.53769 6.16406 5.85088 5.85088C6.16406 5.53769 6.34001 5.11292 6.34001 4.67001C6.34001 3.7477 5.59233 3.00001 4.67001 3.00001C3.7477 3.00001 3.00001 3.7477 3.00001 4.67001Z"
      fill={theme.primaryColor}
    />
  </svg>
);

export default withTheme(PinIcon);

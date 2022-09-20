import { Box, Typography } from "@material-ui/core";
import { imagesBaseURL } from "app/constants";
import styled, { css } from "styled-components";
import { getCssForMobileView } from "styles/responsive";

const imageURL = `${imagesBaseURL}/landing.png`;

const imageContainerMobile = css`
  height: auto;
  position: unset;
`;

export const ImageContainer = styled(Box)`
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 90vh;
  background-image: url(${imageURL});
  display: flex;
  justify-content: end;
  align-items: end;
  ${getCssForMobileView(imageContainerMobile)}
`;

const landingtextContainerMobile = css`
  max-width: 100%;
`;

export const LandingtextContainer = styled(Box)`
  margin: 4em 2em;
  max-width: 30%;
  ${getCssForMobileView(landingtextContainerMobile)}
`;

export const LandingText = styled(Typography)`
  color: white;
`;

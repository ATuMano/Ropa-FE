import { Box } from "@material-ui/core";
import { imagesBaseURL } from "app/constants";
import styled, { css } from "styled-components";
import { getCssForMobileView } from "styles/responsive";

const imageURL = `${imagesBaseURL}/landing.png`;

const imageContainerMobile = css`
  height: auto;
  position: unset;
  justify-content: end;
  align-items: end;
`;

export const ImageContainer = styled(Box)`
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 90vh;
  background-image: url(${imageURL});
  display: flex;
  ${getCssForMobileView(imageContainerMobile)}
`;

const landingtextContainerMobile = css`
  max-width: 100%;
  margin: 4em 2em;
`;

export const LandingtextContainer = styled(Box)`
  margin: 7em 0 0 8em;
  max-width: 40%;
  ${getCssForMobileView(landingtextContainerMobile)}
`;

const landingtextTitleMobile = css`
  color: white;
  font-size: 24px;
  padding-bottom: 14px;
`;

export const LandingTextTitle = styled.div`
  color: white;
  font-weight: bold;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  font-size: 36px;
  padding-bottom: 8px;
  ${getCssForMobileView(landingtextTitleMobile)}
`;

const landingtextSubTitleMobile = css`
  font-size: 18px;
  padding-bottom: 4px;
`;

export const LandingTextSubTitle = styled.div`
  color: white;
  font-weight: normal;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.235;
  letter-spacing: 0.02em;
  font-size: 20px;
  ${getCssForMobileView(landingtextSubTitleMobile)}
`;
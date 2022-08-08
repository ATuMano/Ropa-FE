import { Box, Typography } from "@material-ui/core";
import { imagesBaseURL } from "app/constants";
import styled from "styled-components";

const imageURL = `${imagesBaseURL}/landing.png`;

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
`;
export const LandingtextContainer = styled(Box)`
  margin: 4em 2em;
  max-width: 30%;
`;
export const LandingText = styled(Typography)`
  color: white;
`;

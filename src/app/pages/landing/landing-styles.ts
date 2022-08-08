import { Box } from "@material-ui/core";
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
`;

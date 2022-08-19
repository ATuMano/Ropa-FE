import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Theme } from "styles";

const getBackgroundColor = (theme: Theme, main: boolean, disabled: boolean) => {
  if (main && disabled) {
    return "#757575";
  } else if (main) {
    return theme.primaryColor;
  } else {
    return "white";
  }
};

export const Button = styled(Box)<{ main: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 46px;
  background-color: ${({ theme, main, disabled }) =>
    getBackgroundColor(theme, main, disabled)};
  border: ${({ theme, disabled }) =>
    disabled ? "none" : `2px solid ${theme.primaryColor}`};
  cursor: ${({ disabled }) => (disabled ? "inherit" : "pointer")};
  padding: 16px 24px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme, main }) => (main ? "white" : theme.primaryColor)};
  line-height: 18px;
  margin-left: 20px;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
`;

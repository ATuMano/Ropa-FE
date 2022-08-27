import { StylesConfig } from "react-select";
import styled from "styled-components";
import { Option } from "./select-types";
import defaultTheme from "styles/default-theme";

export const customReactSelectStyles: StylesConfig<Option> = {
  menuList: base => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px"
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1"
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555"
    }
  }),
  menu: base => ({
    ...base,
    borderRadius: "0px"
  }),
  option: base => ({
    ...base,
    textAlign: "left"
  }),
  valueContainer: base => ({
    ...base,
    textAlign: "left",
    marginBottom: "2px",
    overflowWrap: "anywhere"
  }),
  input: base => ({
    ...base,
    cursor: "text"
  }),
  container: base => ({
    ...base,
    width: "200px"
  }),
  control: base => ({
    ...base,
    borderRadius: "0px",
    height: "48px"
  }),
  indicatorsContainer: base => ({
    ...base,
    color: "blue"
  }),
  placeholder: base => ({
    ...base,
    color: defaultTheme.greyColor,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px"
  })
};

export const IndicatorContainer = styled.div`
  display: flex;
  padding: 0px 15px;
`;

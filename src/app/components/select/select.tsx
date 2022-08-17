/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { default as ReactSelect, ClearIndicatorProps } from "react-select";
import { IndicatorContainer, customReactSelectStyles } from "./select-styles";
import CrossIcon from "app/components/icons/cross-icon";
import { SelectProps, Option } from "./select-types";
import ArrowDownIcon from "app/components/icons/arrow-down-icon";

const ClearIndicator = (props: ClearIndicatorProps<Option, true>) => {
  const {
    innerProps: { ref, ...restInnerProps }
  } = props;

  return (
    <IndicatorContainer data-testid="clear-selection" {...restInnerProps}>
      <CrossIcon />
    </IndicatorContainer>
  );
};

const DropDownIndicator = (props: ClearIndicatorProps<Option, true>) => {
  const {
    innerProps: { ref, ...restInnerProps }
  } = props;
  return !props.hasValue ? (
    <IndicatorContainer data-testid="clear-selection" {...restInnerProps}>
      <ArrowDownIcon width={8} />
    </IndicatorContainer>
  ) : null;
};

export const Select = (props: SelectProps) => {
  return (
    <ReactSelect
      data-testid={`select-${props.name}`}
      components={{
        DropdownIndicator: DropDownIndicator,
        IndicatorSeparator: () => null,
        ClearIndicator
      }}
      filterOption={props.filterConfig}
      styles={customReactSelectStyles}
      isSearchable
      isClearable
      {...props}
    />
  );
};

import { ActionMeta, OnChangeValue, PropsValue } from "react-select";
export interface Option {
  value: string;
  label: string;
}
export interface FilterOption {
  label: string;
  value: string;
  data: Option;
}
export interface SelectProps {
  options: Array<Option>;
  placeholder: string;
  noOptionsMessage: () => string;
  onChange: (
    newValue: OnChangeValue<Option, boolean>,
    actionMeta: ActionMeta<Option>
  ) => void;
  name: string;
  inputId: string;
  value: PropsValue<Option>;
  filterConfig?: (option: FilterOption, searchText: string) => boolean;
}

export type ActionTypes =
  | "clear"
  | "create-option"
  | "deselect-option"
  | "pop-value"
  | "remove-value"
  | "select-option"
  | "set-value";

export const SelectActions = {
  CLEAR: "clear",
  SELECT: "select-option"
};

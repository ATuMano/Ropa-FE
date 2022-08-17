import React from "react";
import { COUNTRIES } from "app/constants";
import { MultiValue } from "react-select";
import { Select } from "../select/select";
import { ActionTypes, Option, SelectActions } from "../select/select-types";
import { useDispatch, useSelector } from "react-redux";
import { selectFiltersTrip } from "features/filters/selectors/filter-selector";
import { updateCountryFilter } from "features/filters/actions/filter-actions";

const CountryFilter = () => {
  const dispatch = useDispatch();
  const filtersTrip = useSelector(selectFiltersTrip);

  const onClearSelection = () => {
    dispatch(updateCountryFilter(""));
  };

  const onSelectValue = (selectedOption: Option | MultiValue<Option>) => {
    const values = Array.isArray(selectedOption)
      ? selectedOption.map(item => item.value)
      : [(selectedOption as Option | null)?.value];
    dispatch(updateCountryFilter(values.toString()));
  };

  const handleChange = (
    selectedOption: Option | MultiValue<Option> | null,
    { action }: { action: ActionTypes }
  ) => {
    if (action === SelectActions.SELECT && selectedOption) {
      onSelectValue(selectedOption);
    } else if (action === SelectActions.CLEAR) {
      onClearSelection();
    }
  };

  const getSelectValue = () =>
    filtersTrip.country
      ? ({
          value: filtersTrip.country,
          label: filtersTrip.country
        } as Option)
      : null;

  return (
    <Select
      placeholder={"Elige la ciudad"}
      options={COUNTRIES}
      noOptionsMessage={() => "No se encuentra resultados"}
      onChange={handleChange}
      name="category"
      inputId="category"
      value={getSelectValue()}
    />
  );
};

export default CountryFilter;

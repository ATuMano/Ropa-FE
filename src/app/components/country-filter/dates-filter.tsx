import { DATE_FORMAT, END_TRIP, START_TRIP } from "app/constants";
import {
  updateEndDateTripFilter,
  updateStartDateTripFilter
} from "features/filters/actions/filter-actions";
import { FilterFields, FilterTrip } from "features/filters/filters.types";
import { selectFiltersTrip } from "features/filters/selectors/filter-selector";
import moment from "moment";
import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "moment/locale/es";

type DateFilterProps = {
  fieldId: string;
  placeholder: string;
};

const DateSelect = styled(Datetime)`
  .form-control {
    height: 48px;
    width: 150px;
    padding: 8px;
    color: #333333;

    ::placeholder {
      color: #999999;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: #999999;
    }

    ::-ms-input-placeholder {
      color: #999999;
    }
  }
`;

const updateValue = {
  [START_TRIP as string]: updateStartDateTripFilter,
  [END_TRIP as string]: updateEndDateTripFilter
};

const DateFilter = (props: DateFilterProps) => {
  const dispatch = useDispatch();
  const filtersTrip = useSelector(selectFiltersTrip);
  const key: keyof FilterTrip = props.fieldId as FilterFields;

  const clearValue = () => dispatch(updateValue[props.fieldId](""));

  const inputProps: any = {
    placeholder: props.placeholder
  };

  const handleChange = (value: string | moment.Moment) => {
    if (moment(value, DATE_FORMAT, true).isValid()) {
      dispatch(
        updateValue[props.fieldId](
          moment.isMoment(value) ? moment(value).format(DATE_FORMAT) : value
        )
      );
    } else {
      clearValue();
    }
  };

  return (
    <DateSelect
      inputProps={inputProps}
      timeFormat={false}
      value={filtersTrip[key]}
      onChange={handleChange}
      dateFormat={DATE_FORMAT}
      closeOnSelect
    ></DateSelect>
  );
};

export default DateFilter;

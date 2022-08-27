import { ConfigModel } from "features/configuration/configuration-types";

interface ActionStandardBase {
  type: string;
  meta?: any;
  error?: any;
}

export interface ActionStandard<T> extends ActionStandardBase {
  payload?: T;
}

export interface ActionPayloadRequired<T> extends ActionStandardBase {
  payload: T;
}

export interface ActionOnSuccessPayloadRequired<T, ST> {
  type: string;
  payload: T;
  meta: { onSuccess: ST };
}

export interface ActionOnProgressOnSuccessOnErrorPayloadRequired<T, PT, ST, ET>
  extends ActionOnSuccessPayloadRequired<T, ST> {
  type: string;
  payload: T;
  meta: { onProgress: PT; onSuccess: ST; onError: ET };
}

export interface ActionOnSuccess {
  type: string;
  meta: { onSuccess: Function };
}

export interface State {
  isAppLoaded: boolean;
  configuration: ConfigModel;
  currentLanguage: string;
  selectedGender: string;
  selectedCategory: string;
  filtersTrip: FilterTrip;
  productsInChart: string[];
  selectedStoreId: string;
}

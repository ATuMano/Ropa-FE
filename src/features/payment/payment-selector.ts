import { State } from "app/store/types";

export const selectPaymentData = (state: State) => state.paymentData;

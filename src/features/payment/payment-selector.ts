import { State } from "app/store/types";

export const selectSelectPaymentData = (state: State) => state.paymentData;

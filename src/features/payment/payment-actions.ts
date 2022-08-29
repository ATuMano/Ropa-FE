import { ActionStandard } from "app/store/types";
import { PaymentData } from "./payment.types";

export const PAYMENT_DATA_ACTION = "SET_PAYMENT_DATA";

export const setPaymentData = (
  payload: PaymentData
): ActionStandard<PaymentData> => ({
  type: PAYMENT_DATA_ACTION,
  payload
});

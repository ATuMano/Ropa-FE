import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { PAYMENT_DATA_ACTION } from "./payment-actions";
import { PaymentData } from "./payment.types";

export const paymentInitialData = {
  cardHolder: "",
  cardNumber: "",
  cardExpiration: "",
  cardCVV: ""
};

const paymentHandler: Mapping<Function> = {
  [PAYMENT_DATA_ACTION]: (
    _state: PaymentData,
    action: ActionStandard<PaymentData>
  ) => action.payload
};

export const paymentDataReducer = (
  state: PaymentData = paymentInitialData,
  action: ActionStandard<string>
) => {
  return handle(state, action, paymentHandler);
};

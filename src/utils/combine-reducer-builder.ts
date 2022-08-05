import { State } from "app/store/types";
export type ReducerNamed = {
  reducer: any;
  name: (obj: State) => any;
};

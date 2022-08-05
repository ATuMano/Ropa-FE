import { State } from "app/store/types";

export const PERSISTED_STATE = "state";

type persistedState = {
  [key: string]: any;
};

const whiteList: string[] = [];

export const getPersistedState: () => any = () => {
  try {
    const serializedState = window.localStorage.getItem(PERSISTED_STATE);
    if (!serializedState) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const persistState: (state: State) => void = state => {
  try {
    if (whiteList.length) {
      const stateToPersist: persistedState = {};

      for (let storeAttr of whiteList) {
        stateToPersist[storeAttr] = JSON.parse(
          JSON.stringify(state[storeAttr as keyof State])
        );
      }

      window.localStorage.setItem(
        PERSISTED_STATE,
        JSON.stringify(stateToPersist)
      );
    }
  } catch (error) {
    console.error("State could not be persisted: ", error);
  }
};

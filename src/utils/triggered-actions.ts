import { ActionStandard } from "app/store/types";

const originalTimeout = setTimeout;

const getNewArray = <T>(): Array<T> => {
  return [] as Array<T>;
};

export const triggeredActions = {
  actions: getNewArray<ActionStandard<any>>(),
  actionTypes: getNewArray<string>(),

  clear() {
    this.actions = [];
    this.actionTypes = [];
  },

  getAction(searchedActionType: string) {
    return this.actions.find(
      (action: ActionStandard<any>) => action.type === searchedActionType
    );
  },

  getLastActionCalled(searchedActionType: string) {
    return this.actions
      .reverse()
      .find(
        (action: ActionStandard<any>) => action.type === searchedActionType
      );
  },

  getActions() {
    return this.actions;
  },

  getActionsTypes() {
    return this.actionTypes;
  },

  waitForAction(searchedActionType: string) {
    return Promise.race([
      new Promise(resolve => {
        const isAction = () =>
          triggeredActions
            .getActionsTypes()
            .filter(actionType => actionType === searchedActionType).length > 0;
        const check = (): any =>
          originalTimeout(
            (): Promise<any> => (isAction() ? resolve("") : check()),
            1
          );
        check();
      }),
      new Promise((_, reject) =>
        originalTimeout(
          () =>
            reject(
              new Error(`Timeout looking for Action ${searchedActionType}`)
            ),
          1000
        )
      )
    ]);
  }
};

export const actionWatcherMiddleware = () => (next: Function) => (
  action: ActionStandard<any>
) => {
  triggeredActions.actionTypes.push(action.type);
  triggeredActions.actions.push(action);

  return next(action);
};

export default triggeredActions;

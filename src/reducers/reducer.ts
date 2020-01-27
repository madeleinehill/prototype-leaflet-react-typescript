import { SET_GLOBAL_TIME } from "../actions";
import { StateTree } from "../types";
import testObservations from "./testObservations";

const initialState: StateTree = {
  globalTime: 1800,
  focusedObject: null,
  observations: testObservations,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_GLOBAL_TIME:
      return { ...state, globalTime: action.value };

    case "ERROR":
      return { ...state, error: action.msg };

    default:
      return state;
  }
};

export default reducer;

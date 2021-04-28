import { AUTH_PERSIST} from "@actions";
import { PURGE } from "redux-persist/lib/constants";

const initialState = {
  token: null
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_PERSIST:
      return {
        ...state,
        token: action.payload.token
      };
    case PURGE:
      return {};
    default:
      return state;
  }
}

export const AUTH_PERSIST = 'AUTH_PERSIST';
import storage from 'redux-persist/lib/storage';
import {PURGE} from 'redux-persist';
export function getPersistedUserAuth(token) {
  return {
    type: AUTH_PERSIST,
    payload: {token},
  };
}


export function logoutAction() {
  return {
    type: PURGE,
    key: 'root',
    storage,
    result: () => null,
  };
}

import { authReducer } from "@reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import axios from "axios";
import { createLogger } from "redux-logger";
import axiosMiddleware from "redux-axios-middleware";

export const persistConfig = {
  key: "root",
  storage,
  timeout: null,
  keyPrefix: "",
  debug: true,
  serialize: true,
  // blacklist: [""]
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
  })
);

export const logger = createLogger({});
export const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
export async function cleanStore() {
  await persistor.purge();
  await persistor.flush();
  await persistor.persist();
  await store.dispatch({
    type: REHYDRATE,
  });
}

export default {
  store,
  persistor,
};

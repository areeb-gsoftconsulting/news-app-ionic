import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducers from "../store/slice";
import sagas from "../store/sagas";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
const config = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["loading", "addsController"],
  debug: false, //to get useful logging
};
import { persistStore, persistReducer } from "redux-persist";
const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  //  middleware.push(createLogger());
}

const reducers = persistReducer(config, rootReducers);
const enhancers = [...middleware];
const persistConfig: any = { enhancers };

export const store = configureStore({
  reducer: reducers,
  middleware: enhancers,
});

sagaMiddleware.run(sagas);
export const persistor = persistStore(store, persistConfig);

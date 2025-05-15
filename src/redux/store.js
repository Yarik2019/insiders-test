import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { authReducer } from "./auth/slice";
// import { filterReducer } from "./filters/slice";
// import { contactReducer } from "./contacts/slice";
// const authPersistConfig = {
//   key: "contacts",
//   version: 1,
//   storage,
//   whitelist: ["items"],
// };

export const store = configureStore({
  reducer: {
    // contacts: persistReducer(authPersistConfig, contactReducer),
    // filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

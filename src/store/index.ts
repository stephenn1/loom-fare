import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { user, userReducer } from "./slices/user.slice";
import { adminUsers, adminUsersReducer } from "./slices/admin-users.slice";

const reducer = combineReducers({
  [user]: userReducer,
  [adminUsers]: adminUsersReducer,
});

const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

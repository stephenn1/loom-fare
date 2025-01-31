import { createSlice } from "@reduxjs/toolkit";

interface FirebaseAuthUser {
  id: string;
  email: string;
}

export const initialState: FirebaseAuthUser = {
  id: "",
  email: "",
};

const adminUserSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    setAdminUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAdminUser } = adminUserSlice.actions;
export const adminUsers = adminUserSlice.name;
export const adminUsersReducer = adminUserSlice.reducer;

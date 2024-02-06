import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  password?: string;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}


const initialState = {
  name: "",
  email: "",
  password: "",
  id: "",
  createdAt: "",
  updatedAt: "",
  __v: 0
} as UserState;

export const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserAction: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action?.payload
      }
    },
    clearUserAction : () => initialState
  },
});


export const {
  updateUserAction,
  clearUserAction
} = User.actions;
export default User.reducer;

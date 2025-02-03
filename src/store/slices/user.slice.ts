import { AccountStatus, TransactionStatus, TransactionType } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";

export interface User {
  address: string;
  balance: number;
  city: string;
  country: string;
  currency: string;
  deposit: number;
  depositAddress: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  occupation: string;
  password: string;
  phoneNumber: string;
  photoUrl: string;
  postalCode: number;
  profit: number;
  prompt: { title: string; message: string; note?: string; seen: boolean };
  state: string;
  status: AccountStatus;
  timestamp: number;
  transactions: [] | Transaction[];
  withdrawal: number;
  agreedToTerms: boolean;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  source: string;
  date: string;
  status: TransactionStatus;
}

export const userInitialState: User = {
  address: "",
  balance: 0,
  city: "",
  country: "",
  currency: "",
  deposit: 0,
  depositAddress: "bc1qayxz9ltcc8cf85s8k0dtwccjajy4drv79gtf5n",
  email: "",
  firstName: "",
  gender: "",
  id: "",
  lastName: "",
  occupation: "",
  password: "",
  phoneNumber: "",
  photoUrl: "",
  postalCode: 0,
  profit: 0,
  prompt: {
    title: "Welcome to LoomFare",
    message:
      "Welcome to a platform where secure transactions, advanced features, and trusted security come together to enhance your crypto experience.",
    note: "New users must make an initial deposit to fully activate their wallet, unlock all features, and enable unlimited transactions. Deposited funds will be available for use on the platform or can be withdrawn later.",
    seen: false,
  },
  state: "",
  status: AccountStatus.Active,
  timestamp: 0,
  transactions: [],
  withdrawal: 0,
  agreedToTerms: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => action.payload,
    setUserPhotoUrl: (state, action) => ({
      ...state,
      photoUrl: action.payload,
    }),
  },
});

export const { setUser, setUserPhotoUrl } = userSlice.actions;
export const user = userSlice.name;
export const userReducer = userSlice.reducer;

import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { DIVISOR } from "../../constants/MinimumCoin";
import { RootState } from "../core/store";

export interface Coin {
  amount: number;
  symbol: string;
  visible: boolean;
}
export interface Coins {
  [index: string]: Coin;
}

export interface Nimonics extends Array<string> {}

export interface User {
  privateKey: string;
  walletAddress: string;
  nimonics: Nimonics;
  coins: Coins;
  visible: boolean;
}

interface Users extends Array<User> {}

interface CoinBase {
  name: string;
  symbol: string;
}

interface InitialWallets {
  users: Users;
  currentWallet: string;
  allCoins: { [index: string]: CoinBase };
}

const initialWallets: InitialWallets = {
  currentWallet: "",
  users: [],
  allCoins: {},
};

export interface CreateToken {
  address: string;
  name: string;
  symbol: string;
  amount: number;
}

export interface SendToken {
  coinAddress: string;
  walletAddress: string;
  amount: number;
}

export const walletSlice = createSlice({
  name: "wallet",
  initialState: initialWallets,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      const newUsersArray: Users = [...state.users, action.payload];
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      (state.users = newUsersArray),
        (state.currentWallet = action.payload.walletAddress);
    },
    onCreateToken: (state, action: PayloadAction<CreateToken>) => {
      if (state.currentWallet === "") {
        alert("please login first");
        return;
      }

      const currentUserIndex = state.users.findIndex(
        (user) => user.walletAddress === state.currentWallet
      );
      const currentUserData: User = JSON.parse(
        JSON.stringify(current(state.users[currentUserIndex]))
      );
      currentUserData.coins[action.payload.address] = {
        amount: action.payload.amount / DIVISOR,
        symbol: action.payload.symbol,
        visible: true,
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      (state.users[currentUserIndex] = currentUserData),
        (state.allCoins[action.payload.address] = {
          name: action.payload.name,
          symbol: action.payload.symbol,
        });
      alert("추가 성공");
    },
    onChangeCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentWallet = action.payload;
    },
    onChangeUserCoinVisible: (state, action: PayloadAction<string>) => {
      if (!state.allCoins[action.payload] || state.currentWallet === "") {
        alert("토큰 추가 실패");
        return;
      }
      const currentUserIndex = state.users.findIndex(
        (user) => user.walletAddress === state.currentWallet
      );
      const currentUserData: User = JSON.parse(
        JSON.stringify(current(state.users[currentUserIndex]))
      );
      const newUserCoin: Coin = currentUserData.coins[action.payload]
        ? {
            visible: true,
            amount: currentUserData.coins[action.payload].amount,
            symbol: state.allCoins[action.payload].symbol,
          }
        : {
            visible: true,
            amount: 0,
            symbol: state.allCoins[action.payload].symbol,
          };
      state.users[currentUserIndex].coins[action.payload] = newUserCoin;
      alert("토큰 추가 성공");
    },
    onSendToken: (state, action: PayloadAction<SendToken>) => {
      const currentUserIndex = state.users.findIndex(
        (user) => user.walletAddress === state.currentWallet
      );
      const currentUserData: User = JSON.parse(
        JSON.stringify(current(state.users[currentUserIndex]))
      );
      if (
        currentUserData.coins[action.payload.coinAddress].amount <
        action.payload.amount
      ) {
        alert("잔액이 부족합니다");
        return;
      }
      const targetUserIndex = state.users.findIndex(
        (user) => user.walletAddress === action.payload.walletAddress
      );
      if (targetUserIndex < 0) {
        alert("유효하지 않은 주소입니다.");
        return;
      }
      const targetUserData: User = JSON.parse(
        JSON.stringify(current(state.users[targetUserIndex]))
      );
      //1. 커런트 유저 - 타겟 유저 +, 타겟 유저 없었을 경우 생성까지
      currentUserData.coins[action.payload.coinAddress].amount -=
        action.payload.amount;
      const newTargetData: Coin = targetUserData.coins[
        action.payload.coinAddress
      ]
        ? {
            amount:
              targetUserData.coins[action.payload.coinAddress].amount +
              action.payload.amount,
            symbol: targetUserData.coins[action.payload.coinAddress].symbol,
            visible: targetUserData.coins[action.payload.coinAddress].visible,
          }
        : {
            amount: action.payload.amount,
            symbol: state.allCoins[action.payload.coinAddress].symbol,
            visible: false,
          };
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      (state.users[currentUserIndex] = currentUserData),
        (state.users[targetUserIndex].coins[action.payload.coinAddress] =
          newTargetData);
      alert("전송 성공");
    },

    onHideUser: (state, action: PayloadAction<string>) => {
      const currentUserIndex = state.users.findIndex(
        (user) => user.walletAddress === state.currentWallet
      );
      state.users[currentUserIndex].visible = false;
    },
  },
});

export const {
  createUser,
  onCreateToken,
  onChangeCurrentUser,
  onChangeUserCoinVisible,
  onHideUser,
  onSendToken,
} = walletSlice.actions;

export const selectUsers = (state: RootState) => state.wallet.users;
export const selectCurrentWallet = (state: RootState) =>
  state.wallet.currentWallet;
export const selectCurrentUserData = (state: RootState) => {
  if (state.wallet.currentWallet === "") {
    return {
      privateKey: "",
      walletAddress: "",
      nimonics: [],
      coins: {},
      visible: false,
    };
  }
  const temp = [...state.wallet.users];
  const currentUserIndex = temp.findIndex(
    (user) => state.wallet.currentWallet === user.walletAddress
  );

  return temp[currentUserIndex];
};
export const selectAllCoins = (state: RootState) => state.wallet.allCoins;
export default walletSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../store";

const initialState = {
  data: getStore("shop") || [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getData(state, { payload }) {
      if (state.data.some((value) => value.id === payload.id)) {
        state.data = state.data.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              count: item.count + 1,
              userPrice: (item.count + 1) * item.price,
            };
          }
          return item;
        });
        setStore("shop", state.data); 
        return;
      }

      state.data = [
        ...state.data,
        { ...payload, count: 1, userPrice: payload.price },
      ];
      setStore("shop", state.data);
    },
    deleteData(state, { payload }) {
      state.data = state.data.filter((value) => value.id != payload);
      setStore("shop", state.data);
    },
    increment(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload
          ? {
              ...value,
              count: value.count + 1,
              userPrice: (value.count + 1) * value.price,
            }
          : value
      );
      setStore("shop", state.data);
    },
    decrement(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload
          ? { 
              ...value, 
              count: value.count <= 1 ? 1 : value.count - 1,
              userPrice: (value.count <= 1 ? 1 : value.count - 1) * value.price 
            }
          : value
      );
      setStore("shop", state.data);
    },
  },
});

export const { getData, deleteData, increment, decrement } = shopSlice.actions;
export default shopSlice.reducer;


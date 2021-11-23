import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerName: "",
    score: 0,
    riddles: []
  },
  reducers: {
    addPlayer: (state, action) => {
      state.playerName = action.payload;
    },
    addRiddles: (state, action) => {
      state.riddles += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addPlayer, addRiddles } = gameSlice.actions;

export default gameSlice.reducer;

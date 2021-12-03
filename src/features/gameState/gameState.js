import { createSlice } from "@reduxjs/toolkit";
export const gameSlice = createSlice({
  name: "game",
  initialState: {
    // setup random name generator for players with no name input
    playerName: "Guest",
    score: 0
  },
  reducers: {
    addPlayer: (state, action) => {
      state.playerName = action.payload;
    },
    addRiddles: (state, action) => {
      console.log(action.payload);
      state.riddles = action.payload.message;
    },
    correctAnswer: (state, action) => {
      state.score += 100;
      state.riddles.riddlesArr.shift();
    }
  }
});

// Action creators are generated for each case reducer function
export const { addPlayer, addRiddles, correctAnswer } = gameSlice.actions;

export default gameSlice.reducer;

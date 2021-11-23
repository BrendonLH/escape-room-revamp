import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameState/gameState.js";

export default configureStore({
  reducer: {
    game: gameReducer
  }
});

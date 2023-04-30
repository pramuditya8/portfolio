import { combineReducers } from "redux";
import portfolioReducer from "./portfolios";

export const rootReducer = combineReducers({
  portfolios: portfolioReducer,
});

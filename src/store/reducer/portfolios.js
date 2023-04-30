import { PORTFOLIOS_FETCH_SUCCESS } from "../action/actionType";

export default function portfolioReducer(state = { portfolios: [] }, action) {
  switch (action.type) {
    case PORTFOLIOS_FETCH_SUCCESS:
      return { ...state, portfolios: action.payload };
    default:
      return state;
  }
}

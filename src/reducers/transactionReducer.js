import { GET_ALL_TRANSACTIONS } from '../actions/types';
const initialState = {
};
export default function (state = initialState, action) {
  switch (action.type) {
      case GET_ALL_TRANSACTIONS: 
      return {
          ...state
      }
    default:
      return state;
  }
}

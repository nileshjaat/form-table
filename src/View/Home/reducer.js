import { SAVE_DATA } from './constants';

const initialState = {
  tableData: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        tableData: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;

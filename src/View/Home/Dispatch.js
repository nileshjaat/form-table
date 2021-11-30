import { saveData } from './actions';

export function saveDataInfo(data) {
  return (dispatch) => {
    dispatch(saveData(data));
  };
}

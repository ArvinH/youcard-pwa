import { createAction } from 'redux-actions';
import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
  SET_SNACKBARMSG,
} from '../constants/actionTypes';

export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction(HIDE_SPINNER);
export const showSnackbar = createAction(SHOW_SNACKBAR);
export const hideSnackbar = createAction(HIDE_SNACKBAR);

export const setSnackBar = (condition = false, msg = '') => {
  return (dispatch) => {
    if (!condition) {
      dispatch(hideSnackbar());
      dispatch(showSnackbar());
      dispatch({
        type: SET_SNACKBARMSG,
        payload: { data: msg },
      });
    } else {
      dispatch(hideSnackbar());
      dispatch(showSnackbar());
      dispatch({
        type: SET_SNACKBARMSG,
        payload: { data: msg },
      });
    }
  };
};

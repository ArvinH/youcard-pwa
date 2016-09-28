import { createAction } from 'redux-actions';
import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
} from '../constants/actionTypes';

export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction(HIDE_SPINNER);
export const showSnackbar = createAction(SHOW_SNACKBAR);
export const hideSnackbar = createAction(HIDE_SNACKBAR);

export const setSnackBar = (condition = 'online') => {
  return (dispatch) => {
    if (condition !== 'online') {
      dispatch(showSnackbar());
    } else {
      dispatch(hideSnackbar());
    }
  };
};

import { handleActions } from 'redux-actions';
import { UiState } from '../../constants/models';

const uiReducers = handleActions({
  SHOW_SPINNER: state => (
    state.set(
      'spinnerVisible',
      true
    )
  ),
  HIDE_SPINNER: state => (
    state.set(
      'spinnerVisible',
      false
    )
  ),
  SHOW_SNACKBAR: state => (
    state.set(
      'snackbar',
      true
    )
  ),
  HIDE_SNACKBAR: state => (
    state.set(
      'snackbar',
      false
    )
  ),
}, UiState);

export default uiReducers;


import { handleActions } from 'redux-actions';
import { CardStackState } from '../../constants/models';

const youcardReducers = handleActions({
  GET_YOUCARD_SUCCESS: (state, { payload }) => (
    state.merge({
      cardstack:
      payload.data,
    })
  ),
}, CardStackState);

export default youcardReducers;

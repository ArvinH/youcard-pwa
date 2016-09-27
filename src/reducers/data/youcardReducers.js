import { handleActions } from 'redux-actions';
import { CardListState } from '../../constants/models';

const youcardReducers = handleActions({
  GET_YOUCARDLIST_SUCCESS: (state, { payload }) => (
    state.merge({
      cardList: payload.data,
    })
  ),
  GET_YOUCARD_SUCCESS: (state, { payload }) => (
    state.merge({
      cardstack:
      payload.data,
    })
  ),
}, CardListState);

export default youcardReducers;

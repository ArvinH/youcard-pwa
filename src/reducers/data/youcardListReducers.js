import { handleActions } from 'redux-actions';
import { CardListState } from '../../constants/models';

const youcardListReducers = handleActions({
  GET_YOUCARDLIST_SUCCESS: (state, { payload }) => (
    state.merge({
      cardList: payload.data,
    })
  ),
}, CardListState);

export default youcardListReducers;

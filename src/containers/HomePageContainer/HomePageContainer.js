import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';

import {
  getCardList,
  getCardStack,
} from '../../actions';

export default connect(
  state => ({
    cardList: state,
  }),
  dispatch => ({
    onEnterCardStack: cardstackId => (
      dispatch(getCardStack(cardstackId))
    ),
    getCardList: () => (
      dispatch(getCardList())
    ),
  })
)(HomePage);

import 'whatwg-fetch';
import {
  GET_YOUCARD_INITIATE,
  GET_YOUCARD_SUCCESS,
  GET_YOUCARD_FAIL,
  GET_YOUCARDLIST_INITIATE,
  GET_YOUCARDLIST_SUCCESS,
  GET_YOUCARDLIST_FAIL,
} from '../constants/actionTypes';

import {
  showSpinner,
  hideSpinner,
} from './uiActions';

export const getCardStack = (cardstackId = '83775e20-83bb-11e6-b1c9-2727e3ec36ef') => {
  return (dispatch) => {
    dispatch({ type: GET_YOUCARD_INITIATE });
    dispatch(showSpinner());
    fetch(`https://tw.yql.news.yahoo.com/v1/abunews/cardstack/${cardstackId}`)
      .then(response => response.json())
      .then((json) => {
        dispatch({ type: GET_YOUCARD_SUCCESS, payload: { data: json.cardstacks.result } });
        dispatch(hideSpinner());
      })
      .catch(() => dispatch({ type: GET_YOUCARD_FAIL }));
  };
};
//

export const getCardList = () => {
  return (dispatch) => {
    dispatch({ type: GET_YOUCARDLIST_INITIATE });
    dispatch(showSpinner());
    fetch('https://arvinh.herokuapp.com/youcard/cardstack_search')
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: GET_YOUCARDLIST_SUCCESS,
          payload: { data: json.cardstacks.result[0].card_stacks },
        });
        dispatch(hideSpinner());
      })
      .catch(() => dispatch({ type: GET_YOUCARDLIST_FAIL }));
  };
};

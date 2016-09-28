import Immutable from 'immutable';

export const UiState = Immutable.fromJS({
  spinnerVisible: false,
  snackbar: false,
});

export const CardListState = Immutable.fromJS({
  cardList: [],
});

export const CardStackState = Immutable.fromJS({
  cardstack: {},
});

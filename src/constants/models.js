import Immutable from 'immutable';

export const UiState = Immutable.fromJS({
  spinnerVisible: false,
  snackbar: false,
  snackbarMsg: '',
});

export const CardListState = Immutable.fromJS({
  cardList: [],
});

export const CardStackState = Immutable.fromJS({
  cardstack: {},
});

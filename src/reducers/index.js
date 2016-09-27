import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';// import routes from './routes';
import youcardList from './data/youcardListReducers';// import routes from './routes';

const rootReducer = combineReducers({
  ui,
  youcardList,
});

export default rootReducer;

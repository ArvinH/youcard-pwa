import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainContainer from './containers/MainContainer';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';
import store from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// require('offline-plugin/runtime').install();
(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./youcard-service-worker.js');
  }
})();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={HomePageContainer} />
        <Route path="/result" component={ResultPageContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

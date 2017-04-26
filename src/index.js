import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import {getAllData} from './actions'
import App from './components/App';
import Home from './components/Home';
import Repos from './components/Repos';
import Canvas from './components/Canvas';
import User from './components/User';
import Submit from './components/Submit';
import Edit from './components/Edit';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
store.dispatch(getAllData());
injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/repos/:name" component={Repos} />
          <Route path="/canvas" component={Canvas} />
          <Route path="/user" component={User} />
          <Route path="/submit" component={Submit} />
          <Route path="/edit" component={Edit} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,

  document.getElementById('app'));

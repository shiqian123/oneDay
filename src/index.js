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
import App from './pages/App';
import Home from './pages/Home';
import Repos from './pages/Repos';
import Canvas from './pages/Canvas';
import User from './pages/User';
import Submit from './pages/Submit';
import {Edit,EditContent} from './pages/Edit';
import  '../res/nav/responsive-nav.css';
// import  '../src/assets/styles/bootstrap.css';
import  '../src/assets/styles/main.css';

Date.prototype.formatDate = function () {
  var y = this.getFullYear();
  var m = this.getMonth() + 1;
  var d = this.getDate();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? ('0' + d) : d;
  return y + '-' + m + '-' + d;
}
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
          <Route path="/edit" component={Edit}>
          </Route>
        </Route>
        <Route path="/editContent/:content" component={EditContent} />

      </Router>
    </MuiThemeProvider>
  </Provider>,

  document.getElementById('app'));

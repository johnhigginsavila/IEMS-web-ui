import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './pages/App';
import HomePage from './pages/Home.page';
import DashboardPage from './pages/Dashboard.page';
import EventManagementPage from './pages/EventManagement.page';
import NewActivity from './components/NewActivity';
import AdminPage from './pages/Admin.page';
import ProfilePage from './pages/Profile.page';
import RequireAuth from './components/auth/requireAuth';
import RequireAdmin from './components/auth/requireAdmin';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

if (token) {
  store.dispatch({type: AUTH_USER, payload:user});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="event-management" component={RequireAuth(EventManagementPage)}>
          <Route path="new-activity" component={NewActivity} />
        </Route>
        <Route path="profile" component={RequireAuth(ProfilePage)} />
        <Route path="dashboard" component={RequireAuth(DashboardPage)} />
        <Route path="admin" component={RequireAdmin(AdminPage)} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

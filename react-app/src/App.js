import React, { Suspense } from 'react';

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Home from './modules/home'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { BrowserRouter as Router, Route, useHistory, Switch } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import LoadingScreen from './components/loading-screen';
import CustomLogin from './modules/login/custom-login';
import Tiles from './modules/home/tiles';

const App = () => {
      const issuer = process.env.REACT_APP_OKTA_ISSUER;
      const clientId  = process.env.REACT_APP_OKTA_CLIENT_ID;
  const oktaAuth = new OktaAuth({
    devMode:true,
    issuer: issuer,
    clientId: clientId,
    redirectUri: window.location.origin + '/login/callback',
    "useInteractionCodeFlow": true,
    "tokenManager": {
        "storage": "sessionStorage"
    },
  });

  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

 
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Suspense fallback={<div>Loading...</div>}>
        <LoadingScreen />
        <Switch>
          <Route path='/' exact={true} component={CustomLogin} />
          <SecureRoute path='/dashboard' exact={true} component={Home}/>
          <SecureRoute path='/home' exact={true} component={Home}/>
          <SecureRoute path='/tiles' exact={true} component={Tiles}/>
          <Route path='/login/callback' component={LoginCallback} />
          <Route path='/logout' exact={true} component={Logout} />
        </Switch>
      </Suspense>
    </Security>
  );
}

const AppWithRouterAccess = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouterAccess;
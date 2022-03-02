import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import SignInScreen from 'src/screens/SignIn/SignInScreen';
import ClientsScreen from '@ClientsScreen/ClientsScreen';
import ClientUpdate from '@ClientUpdateScreen/ClientUpdate';
import NotFound from '@NotFound/NotFound';

function routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('@storage_Key');

    return (
      <Route
        {...rest}
        render={(props) =>
          token ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          )
        }
      />
    );
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <SignInScreen />} />

        <PrivateRoute
          path="/Clients"
          exact
          component={() => <ClientsScreen />}
        />
        <PrivateRoute
          path="/Clients/:id"
          exact
          component={() => <ClientUpdate />}
        />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default routes;

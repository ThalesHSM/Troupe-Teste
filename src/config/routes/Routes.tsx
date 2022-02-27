import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import HomeScreen from '@HomeScreen/HomeScreen';
import ClientsScreen from '@ClientsScreen/ClientsScreen';

function routes() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomeScreen setIsLoggedIn={setIsLoggedIn} />}
        />
        {isLoggedIn ? (
          <Route
            path="/Clients"
            element={<ClientsScreen setIsLoggedIn={setIsLoggedIn} />}
          />
        ) : (
          <Route path="/Clients" element={<Navigate replace to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default routes;

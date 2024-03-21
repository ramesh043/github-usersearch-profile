import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import PrivateRoute from "./pages/PrivateRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthWrapper from "./pages/AuthWrapper";
// import PrivateRoute from "./pages/PrivateRoute";
function App() {
  return (
    <div className="App">
      {/* <h1>Github Search App</h1> */}
      <AuthWrapper>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;

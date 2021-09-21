import './App.css';
import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import Auth from './components/Auth/Auth';
import Contact from './components/Contact';
import Issues from './components/IssuesPage';
import Nav from './components/Nav';
import Profile from './components/Profile';

import { UserContext } from './context/UserProvider'

function App() {
  const {token} = useContext(UserContext)

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact = {true} path = "/" render = {() => token ? <Redirect to = '/profile'/> : <Auth/>} />

        <ProtectedRoute path = "/profile" component = {Profile} redirectTo = '/' token = {token} /> {/* Week 6 addition Replaced render = {() => <Profile/> */}

        <ProtectedRoute path = "/issues" component = {Issues} redirectTo = '/' token = {token} />  {/* render = {() => <Issues/>} */}

        <Route path = "/contact" render = {() => <Contact/>} />

      </Switch>
    </div>
  );
}

export default App;

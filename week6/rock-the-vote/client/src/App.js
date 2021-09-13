import './App.css';
import React, { useContext } from 'react';
import { UserContext } from './context/UserProvider'
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth';
import Contact from './components/Contact';
import Issues from './components/Issues';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const {token} = useContext(UserContext)

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact = {true} path = "/" render = {() => token ? <Redirect to = '/profile'/> : <Auth/>} />

        <ProtectedRoute path = "/profile" component = {Profile} redirectTo = '/' token = {token} /> {/* Week 6 addition Replaced render = {() => <Profile/> */}

        <Route path = "/issues" render = {() => <Issues/>} />

        <Route path = "/contact" render = {() => <Contact/>} />

      </Switch>
    </div>
  );
}

export default App;

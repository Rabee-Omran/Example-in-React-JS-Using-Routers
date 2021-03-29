import React, { Component } from 'react';
import {BrowserRouter, Route , Link, Switch } from "react-router-dom";
import UsersPage from './Pages/UsersPage';
import UserPage from './Pages/UserPage';
import CreateUserPage from './Pages/CreateUserPage';
import EditUserPage from './Pages/EditUserPage';

const HomePage = () => <div>Home</div>
const AboutPage = () => <div>About</div>


class App extends Component{  

  render(){

     
    return (
    <BrowserRouter>

      <div>
        <Link to ='/'>Home</Link> {"  "}
        <Link to ='/users'>Users</Link>{"  "}
        <Link to ='/about'>About</Link>{"  "}
        <Link to ='/users/create'>Create User</Link>{"  "}

        {/* switch for display only one page -- oreder is important */}
        <Switch>
        <Route path= "/" exact component={HomePage} />
        <Route path= "/users" exact component={UsersPage} />
        <Route path= "/about"  exact component={AboutPage} />
        <Route path= "/users/create" exact component={CreateUserPage} />
        <Route path= "/users/:id"  exact component={UserPage} />
        <Route path= "/users/edit/:id"  exact component={EditUserPage} />
        </Switch>


      </div>

    </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter, Route , Link } from "react-router-dom";


const HomePage = () => <div>Home</div>
const AboutPage = () => <div>About</div>


class App extends Component{  

  render(){

     
    return (
    <BrowserRouter>

      <div>
        <Link to ='/'>Home</Link> {"  "}
        <Link to ='/about'>About</Link>

        <Route path= "/" exact component={HomePage} />
        <Route path= "/about"  component={AboutPage} />


          <h1>TEST</h1>  


      </div>

    </BrowserRouter>
    );
  }
}

export default App;

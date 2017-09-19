import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { show,Counter} from './components';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><NavLink to="/" activeClassName="active"><h2><font color="black">Counter</font></h2></NavLink></li>
              <li><NavLink to="/show" activeClassName="active"><h2><font color="black">show</font></h2></NavLink></li>

            </ul>
          </div>
          <div className="App-intro">
            <Switch>

                      <Route path="/" component={Counter} exact={true} />
                      <Route path="/show" component={show} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

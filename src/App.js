import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*웹사이트의 내용을 출력하는 역할*/
class App extends Component {
  render() {
    return (
        <div className="gray-background">
            <img src={logo} lat="logo" />
            <h2>Let's develop management system!</h2>
        </div>
    );
  }
}
export default App;

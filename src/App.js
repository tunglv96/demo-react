import React, { Component } from 'react';
import Header from './component/header/Header';
import About from './component/layout/section1/About';
import Service from './component/layout/section2/Service';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <article>
          <About />
          <Service />
        </article>
      </div>
    );
  }
}

export default App;

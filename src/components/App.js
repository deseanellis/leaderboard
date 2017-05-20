import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Controls from '../containers/Controls';
import Content from '../containers/Content';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Controls />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

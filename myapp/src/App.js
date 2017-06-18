import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { translateAction } from './index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    text: "Welcome to React"
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{ this.props.text }</h2>
        </div>
        <button onClick={ this.props.actions.translateAction }>Translate</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    text: state.text
  }),
  dispatch => {
    return { actions: bindActionCreators({ translateAction }, dispatch) }
  }
)(App);

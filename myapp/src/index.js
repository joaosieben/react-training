import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reducer = (state, action) => {
  console.log(state, action);

  if (action.type === 'TRANSLATE') {
    return { ...state, text: 'Bem vindo ao React' }
  }

  return state;
}

export const translateAction = () => ({
  type: "TRANSLATE"
})

const preloadedState = {
  text: 'Welcome to React'
}

const store = createStore(reducer, preloadedState);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

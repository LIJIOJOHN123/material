import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { init } from './reducers'

const store = init()
console.log(store)

ReactDOM.render(<App />, document.getElementById('root'));


